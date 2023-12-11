import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../contexts/ThemeContext";

function ButtonAdd() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <Link to="/notes/new">
          <button
            type="button"
            title="Tambah"
            className={`flex items-center rounded-full text-2xl h-[50px] justify-center p-2 w-[50px] ${
              theme === "dark"
                ? "bg-white text-[#121212]"
                : "bg-[#121212] text-white"
            }`}
          >
            <FiPlus />
          </button>
        </Link>
      )}
    </ThemeConsumer>
  );
}

export default ButtonAdd;
