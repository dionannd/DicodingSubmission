import React from "react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";

function ButtonSubmit({ onSubmit }) {
  return (
    <button
      type="button"
      title="Simpan"
      className="flex items-center bg-white rounded-full text-[#121212] text-2xl h-[50px] justify-center p-2 w-[50px]"
      onClick={onSubmit}
    >
      <FiCheck />
    </button>
  );
}

ButtonSubmit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonSubmit;
