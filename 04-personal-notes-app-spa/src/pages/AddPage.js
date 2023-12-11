import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/api";

function AddPage({ locale }) {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} locale={locale} />
    </section>
  );
}

export default AddPage;
