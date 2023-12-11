import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/404Page";
import RegisterPage from "./pages/RegisterPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoginPage from "./pages/LoginPage";
import ToggleTheme from "./components/ToggleTheme";
import { getUserLogged, putAccessToken } from "./utils/api";
import { LocaleProvider } from "./contexts/LocaleContext";
import ToggleLocale from "./components/ToggleLocale";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      themeContext: {
        theme: localStorage.getItem("theme") || "light",
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme =
              prevState.themeContext.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return {
              themeContext: {
                ...prevState.themeContext,
                theme: newTheme,
              },
            };
          });
        },
      },
      localeContext: {
        locale: "id",
        toggleLocale: () => {
          this.setState((prevState) => {
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: prevState.localeContext.locale === "id" ? "en" : "id",
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState({
      authedUser: data,
    });
  }

  onLogout() {
    this.setState({
      authedUser: null,
    });

    putAccessToken("");
  }

  async componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.theme);

    const { data } = await getUserLogged();

    this.setState({
      authedUser: data,
      initializing: false,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.themeContext.theme !== this.state.themeContext.theme) {
      document.documentElement.setAttribute(
        "data-theme",
        this.state.themeContext.theme
      );
    }
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <ThemeProvider value={this.state.themeContext}>
            <div className="min-h-screen transition-all ease-in-out duration-[50ms]">
              <header className="flex items-center justify-between px-6 py-4 border-b border-white">
                <h1 className="flex-1 text-3xl font-semibold">
                  {this.state.localeContext.locale === "id"
                    ? "Aplikasi Catatan"
                    : "Notes App"}
                </h1>
                <nav className="flex text-2xl">
                  <ul className="flex items-center space-x-6">
                    <li>
                      <ToggleLocale />
                    </li>
                    <li>
                      <ToggleTheme />
                    </li>
                  </ul>
                </nav>
              </header>
              <main>
                <Routes>
                  <Route
                    path="/*"
                    element={
                      <LoginPage
                        loginSuccess={this.onLoginSuccess}
                        locale={this.state.localeContext.locale}
                        theme={this.state.theme}
                      />
                    }
                  />
                  <Route
                    path="/register"
                    element={
                      <RegisterPage
                        locale={this.state.localeContext.locale}
                        theme={this.state.theme}
                      />
                    }
                  />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </LocaleProvider>
      );
    }

    return (
      <LocaleProvider value={this.state.localeContext}>
        <ThemeProvider value={this.state.themeContext}>
          <div className="text-white bg-[#121212] min-h-screen transition-all ease-in-out duration-[50ms] data-[theme=dark]:text-black data-[theme=dark]:bg-[#ddd]">
            <header className="flex items-center justify-between px-6 py-4 border-b border-white">
              <h1 className="flex-1 text-3xl font-semibold">
                {this.state.localeContext.locale === "id"
                  ? "Aplikasi Catatan"
                  : "Notes App"}
              </h1>
              <Navigation
                logout={this.onLogout}
                name={this.state.authedUser.name}
                locale={this.state.localeContext.locale}
                toggleLocale={this.state.localeContext.toggleLocale}
              />
            </header>
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage locale={this.state.localeContext.locale} />
                  }
                />
                <Route
                  path="/archives"
                  element={
                    <ArchivePage locale={this.state.localeContext.locale} />
                  }
                />
                <Route
                  path="/notes/new"
                  element={<AddPage locale={this.state.localeContext.locale} />}
                />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default App;
