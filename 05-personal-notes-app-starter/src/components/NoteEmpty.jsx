import React from "react";
import LocaleContext from "../contexts/LocaleContext";

function NoteEmpty() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">
        {locale === "id" ? "Tidak ada catatan" : "No notes"}
      </p>
    </section>
  );
}

export default NoteEmpty;
