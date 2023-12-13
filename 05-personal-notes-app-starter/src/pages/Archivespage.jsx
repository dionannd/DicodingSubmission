import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/api";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import LocaleContext from "../contexts/LocaleContext";

function Archivespage({ keyword, onKeywordChangeHandler }) {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const getNotes = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotes(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getNotes();
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="archives-page">
      <h2>{locale === "id" ? "Catatan Arsip" : "Archived Note"}</h2>
      <section className="search-bar">
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </section>
      <NoteList notes={filteredNotes} />
    </section>
  );
}

Archivespage.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChangeHandler: PropTypes.func.isRequired,
};

export default Archivespage;
