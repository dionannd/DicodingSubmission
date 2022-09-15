import React from "react";
import PropTypes from "prop-types";
import { FiTrash } from "react-icons/fi";

function ButtonDelete({ id, onDelete }) {
  return (
    <button
      type="button"
      title="Hapus"
      className="flex items-center bg-white rounded-full text-[#121212] text-2xl h-[50px] justify-center p-2 w-[50px]"
      onClick={() => onDelete(id)}
    >
      <FiTrash />
    </button>
  );
}

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ButtonDelete;
