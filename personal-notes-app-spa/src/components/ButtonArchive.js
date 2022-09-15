import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";

function ButtonArchive({ id, onArchive, onUnarchive, notes }) {
  return (
    <button
      type="button"
      title={notes !== true ? "Arsipkan" : "Aktifkan"}
      className="flex items-center bg-white rounded-full text-[#121212] text-2xl h-[50px] justify-center p-2 w-[50px]"
      onClick={() => (notes !== true ? onArchive(id) : onUnarchive(id))}
    >
      {notes !== true ? <BiArchiveIn /> : <BiArchiveOut />}
    </button>
  );
}

ButtonArchive.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  notes: PropTypes.bool.isRequired,
};

export default ButtonArchive;
