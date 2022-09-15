import React from "react";
import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

function ButtonEdit({ id }) {
  return (
    <Link to={`/notes/edit/${id}`}>
      <button
        type="button"
        title="Edit"
        className="flex items-center bg-white rounded-full text-[#121212] text-2xl h-[50px] justify-center p-2 w-[50px]"
      >
        <FiEdit />
      </button>
    </Link>
  );
}

ButtonEdit.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ButtonEdit;
