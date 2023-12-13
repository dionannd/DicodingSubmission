import React from "react";
import {
  Routes,
  Route,
  Link,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { getUserLogged, putAccessToken } from "./utils/api";
import { MdGTranslate, MdExitToApp } from "react-icons/md";
import Navigation from "./components/Navigation";

import NotFound from "./pages/NotFound";
import AddPages from "./pages/AddPages";

import Homepage from "./pages/Homepage";
import Archivespage from "./pages/Archivespage";
import Detailpage from "./pages/Detailpage";

import Loginpages from "./pages/Loginpages";
import Registerpage from "./pages/RegisterPage";

import { ThemeProvider } from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";

import { LocaleProvider } from "./contexts/LocaleContext";

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(
    searchParams.get("keyword") || ""
  );
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );
  const [locale, setLocale] = React.useState(
    localStorage.getItem("locale") || "id"
  );

  const navigate = useNavigate();

  const onLoginSuccessHandler = React.useCallback(async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }, []);

  React.useEffect(() => {
    const getAuth = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
      } catch (error) {
        setInitializing(false);
      }
    };

    getAuth();
  }, []);

  const onLogoutHandler = () => {
    setAuthedUser(null);
    putAccessToken("");
    navigate("/");
  };

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
    localStorage.setItem("locale", locale === "id" ? "en" : "id");
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (initializing) {
    return null;
  }

  if (!authedUser) {
    return (
      <LocaleProvider value={{ locale, toggleLocale }}>
        <ThemeProvider value={{ theme, toggleTheme }}>
          <div className="app-container">
            <header>
              <h1>
                <Link to="/">
                  {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
                </Link>
              </h1>
              <button
                className="toggle-locale"
                type="button"
                onClick={toggleLocale}
              >
                <MdGTranslate />
              </button>
              <ToggleTheme />
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={
                    <Loginpages onLoginSuccess={onLoginSuccessHandler} />
                  }
                />
                <Route path="/register" element={<Registerpage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }

  return (
    <LocaleProvider value={{ locale, toggleLocale }}>
      <ThemeProvider value={{ theme, toggleTheme }}>
        <div className="app-container">
          <header>
            <h1>
              <Link to="/">
                {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
              </Link>
            </h1>
            <Navigation />
            <button
              className="toggle-locale"
              type="button"
              onClick={toggleLocale}
            >
              <MdGTranslate />
            </button>
            <ToggleTheme />
            <button
              className="button-logout"
              type="button"
              onClick={onLogoutHandler}
            >
              <MdExitToApp />
              {authedUser.name}
            </button>
          </header>
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Homepage
                    keyword={keyword}
                    onKeywordChangeHandler={onKeywordChangeHandler}
                  />
                }
              />
              <Route
                path="/archives"
                element={
                  <Archivespage
                    keyword={keyword}
                    onKeywordChangeHandler={onKeywordChangeHandler}
                  />
                }
              />
              <Route path="/notes/new" element={<AddPages />} />
              <Route path="/notes/:id" element={<Detailpage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
