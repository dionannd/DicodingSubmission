import React from "react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";
import { ThemeConsumer } from "../contexts/ThemeContext";

function ButtonSubmit({ onSubmit }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <button
          type="button"
          title="Simpan"
          className={`flex items-center  rounded-full  text-2xl h-[50px] justify-center p-2 w-[50px] ${
            theme === "dark"
              ? "bg-white text-[#121212]"
              : "bg-[#121212] text-white"
          }`}
          onClick={onSubmit}
        >
          <FiCheck />
        </button>
      )}
    </ThemeConsumer>
  );
}

ButtonSubmit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonSubmit;
