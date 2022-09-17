import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <>
      {!notes.length ? (
        <div className="w-full flex items-center justify-center mt-8">
          <h2 className="text-lg text-gray-300">Tidak ada catatan</h2>
        </div>
      ) : (
        <section className="notes-list grid grid-cols-4 mt-8 py-4 px-2 gap-4">
          {notes.length &&
            notes.map((note) => (
              <NoteItem key={note.id} id={note.id} {...note} />
            ))}
        </section>
      )}
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
