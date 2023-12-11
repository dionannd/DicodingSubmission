import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { ThemeConsumer } from "../contexts/ThemeContext";

function ButtonArchive({ id, onArchive, onUnarchive, notes }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <button
          type="button"
          title={notes !== true ? "Arsipkan" : "Aktifkan"}
          className={`flex items-center rounded-full text-2xl h-[50px] justify-center p-2 w-[50px] ${
            theme === "dark"
              ? "bg-white text-[#121212]"
              : "bg-[#121212] text-white"
          }`}
          onClick={() => (notes !== true ? onArchive(id) : onUnarchive(id))}
        >
          {notes !== true ? <BiArchiveIn /> : <BiArchiveOut />}
        </button>
      )}
    </ThemeConsumer>
  );
}

ButtonArchive.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  notes: PropTypes.bool.isRequired,
};

export default ButtonArchive;
