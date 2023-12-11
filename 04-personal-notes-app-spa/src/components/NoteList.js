import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <>
      {notes.length < 1 ? (
        <div className="flex items-center justify-center w-full mt-8">
          <h2 className="text-lg ">Tidak ada catatan</h2>
        </div>
      ) : (
        <section className="grid grid-cols-4 gap-4 px-2 py-4 mt-8 notes-list">
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
