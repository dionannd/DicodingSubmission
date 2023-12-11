import React from "react";
import PropTypes from "prop-types";
import { FiTrash } from "react-icons/fi";
import { ThemeConsumer } from "../contexts/ThemeContext";

function ButtonDelete({ id, onDelete }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <button
          type="button"
          title="Hapus"
          className={`flex items-center rounded-full text-2xl h-[50px] justify-center p-2 w-[50px] ${
            theme === "dark"
              ? "bg-white text-[#121212]"
              : "bg-[#121212] text-white"
          }`}
          onClick={() => onDelete(id)}
        >
          <FiTrash />
        </button>
      )}
    </ThemeConsumer>
  );
}

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ButtonDelete;
