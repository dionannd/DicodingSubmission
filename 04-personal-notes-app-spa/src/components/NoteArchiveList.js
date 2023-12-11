import React from "react";
import PropTypes from "prop-types";
import NoteArchiveItem from "./NoteArchiveItem";

function NoteArchiveList({ notes, locale }) {
  return (
    <>
      {!notes.length ? (
        <div className="flex items-center justify-center w-full mt-8">
          <h2 className="text-lg text-gray-300">
            {locale === "id" ? "Tidak ada catatan" : "No notes found"}
          </h2>
        </div>
      ) : (
        <section className="grid grid-cols-4 gap-4 px-2 py-4 mt-8 notes-list">
          {notes.length &&
            notes.map((note) => (
              <NoteArchiveItem key={note.id} id={note.id} {...note} />
            ))}
        </section>
      )}
    </>
  );
}

NoteArchiveList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteArchiveList;
