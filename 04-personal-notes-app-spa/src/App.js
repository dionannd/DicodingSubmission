import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/404Page";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div className="text-white bg-[#121212] min-h-screen transition-all ease-in-out duration-[50ms]">
      <header className="flex items-center py-4 px-6 justify-between border-b border-white">
        <h1 className="text-3xl font-semibold flex-1">Aplikasi Catatan</h1>
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

export default App;
