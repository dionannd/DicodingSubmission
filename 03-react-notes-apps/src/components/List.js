import React from "react";
import Item from "./Item";

const NotesList = ({
  notes,
  onDelete,
  onArchive,
  query,
  onSearch,
  editNotes,
}) => {
  const isActive = notes.filter((note) => note.archived === false);
  const isArchived = notes.filter((note) => note.archived === true);

  return (
    <div className="note-app__list">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={query}
        onChange={onSearch}
      />
      <div className="note-list__header">
        <div className="note-list__line" />
        <div>
          <h2 className="note-list__title">List Catatan</h2>
        </div>
        <div className="note-list__line" />
      </div>
      {isActive.length !== 0 && (
        <div className="note-list">
          {isActive
            .filter((note) =>
              note.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((note) => (
              <Item
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                note={note}
                editNotes={editNotes}
              />
            ))}
        </div>
      )}
      {isActive.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      ).length === 0 && (
        <p className="note-list__empty-note">Tidak ada catatan</p>
      )}
      <div className="note-list__header">
        <div className="note-list__line" />
        <div>
          <h2 className="note-list__title">Diarsipkan</h2>
        </div>
        <div className="note-list__line" />
      </div>
      {isArchived.length !== 0 && (
        <div className="note-list">
          {isArchived
            .filter((note) =>
              note.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((note) => (
              <Item
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                note={note}
              />
            ))}
        </div>
      )}
      {isArchived.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      ).length === 0 && (
        <p className="note-list__empty-note">Tidak ada catatan</p>
      )}
    </div>
  );
};

export default NotesList;
