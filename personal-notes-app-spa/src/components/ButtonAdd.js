import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function ButtonAdd() {
  return (
    <Link to="/notes/new">
      <button
        type="button"
        title="Tambah"
        className="flex items-center bg-white rounded-full text-[#121212] text-2xl h-[50px] justify-center p-2 w-[50px]"
      >
        <FiPlus />
      </button>
    </Link>
  );
}

export default ButtonAdd;
