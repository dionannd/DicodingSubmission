import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1 className="">Aplikasi Catatan</h1>
        <nav className="navigation">
          <ul>
            <li>Arsip</li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/notes/new" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
