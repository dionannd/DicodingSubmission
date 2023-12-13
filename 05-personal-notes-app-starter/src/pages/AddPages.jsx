import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/api";

function AddPages() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);

    navigate("/");
  }

  return (
    <section className="add-new-page">
      <NoteInput onAddNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPages;
