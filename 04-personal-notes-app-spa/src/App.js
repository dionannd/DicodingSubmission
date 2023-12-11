import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/404Page";
import EditPage from "./pages/EditPage";
import RegisterPage from "./pages/RegisterPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      theme: localStorage.getItem("theme") || "light",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return {
            theme: newTheme,
          };
        });
      },
    };
  }

  componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.theme);
  }

  render() {
    if (this.state.authedUser === null) {
      return (
        <div className="text-white bg-[#121212] min-h-screen transition-all ease-in-out duration-[50ms]">
          <header className="flex items-center justify-between px-6 py-4 border-b border-white">
            <h1 className="flex-1 text-3xl font-semibold">Aplikasi Catatan</h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<p>Halaman Login</p>} />
              <Route path="/signup" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      );
    }

    return (
      <div className="text-white bg-[#121212] min-h-screen transition-all ease-in-out duration-[50ms]">
        <header className="flex items-center justify-between px-6 py-4 border-b border-white">
          <h1 className="flex-1 text-3xl font-semibold">Aplikasi Catatan</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archives" element={<ArchivePage />} />
            <Route path="/notes/new" element={<AddPage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="/notes/edit/:id" element={<EditPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
