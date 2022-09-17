import React from "react";
import { IconArchive, IconDelete, IconMove } from "./icons";
import Tooltip from "react-tooltip-lite";
import { showFormattedDate } from "../utils/data";

const Item = ({ note, id, onDelete, onArchive, editNotes }) => {
  const truncate = (String) => {
    return String.length > 23 ? String.substring(0, 23) + "..." : String;
  };

  return (
    <div key={note.id} className="note-item">
      <div className="note-item__content">
        <h3>{truncate(note.title)}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <Tooltip content="Hapus Catatan">
          <button
            className="note-item__delete-button"
            onClick={() => onDelete(id)}
          >
            <IconDelete />
          </button>
        </Tooltip>
        <Tooltip content={note.archived === !1 ? "Arsipkan" : "Pindahkan"}>
          <button
            className="note-item__archive-button"
            onClick={() => onArchive(id)}
          >
            {note.archived === !1 ? <IconArchive /> : <IconMove />}
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
export default Item;
