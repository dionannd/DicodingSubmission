import React from "react";
import PropTypes from "prop-types";
import { MdOutlineCheck } from "react-icons/md";

function NoteInput({ onAddNote }) {
  const [form, setForm] = React.useState({
    title: "",
    body: "",
  });

  function onBodyChangeEventHandler(e) {
    const trimSpace = (text) => {
      return text
        .replace(/&nbsp;/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&gt;/g, ">")
        .replace(/<br>/g, " ")
        .replace(/&lt;/g, "<");
    };

    setForm({
      ...form,
      body: trimSpace(e.target.innerHTML),
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    if (title === "") {
      alert("Judul tidak boleh kosong");
      return;
    }

    onAddNote(form);
  }

  return (
    <div className="add-new-page__input">
      <input
        className="add-new-page__input__title"
        type="text"
        name="title"
        id="title"
        placeholder="Catatan rahasia"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <div
        className="add-new-page__input__body"
        contentEditable
        data-placeholder="Sebenarnya saya adalah ..."
        suppressContentEditableWarning
        onInput={onBodyChangeEventHandler}
      />

      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Simpan"
          onClick={onSubmitHandler}
        >
          <MdOutlineCheck />
        </button>
      </div>
    </div>
  );
}

NoteInput.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default NoteInput;
