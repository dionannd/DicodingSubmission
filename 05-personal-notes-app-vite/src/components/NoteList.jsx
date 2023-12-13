import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import NoteEmpty from "./NoteEmpty";

function NoteList({ notes }) {
  return (
    <>
      {notes.length < 1 ? (
        <NoteEmpty />
      ) : (
        <section className="notes-list">
          {notes.map((note) => (
            <NoteItem key={note.id} id={note.id} {...note} />
          ))}
        </section>
      )}
    </>
  );
}

NoteList.propType = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
