import React from "react";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/api";
import NoteList from "../components/NoteList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import LocaleContext from "../contexts/LocaleContext";

function Homepage({ keyword, onKeywordChangeHandler }) {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const getNotes = async () => {
      try {
        const { data } = await getActiveNotes();
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
    <section className="homepage">
      <h2>{locale === "id" ? "Catatan aktif" : "Active Note"}</h2>
      <section className="search-bar">
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      </section>
      <NoteList notes={filteredNotes} />
      <div className="homepage__action">
        <Link to="/notes/new">
          <button className="action" type="button" title="Tambah">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}

Homepage.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChangeHandler: PropTypes.func.isRequired,
};

export default Homepage;
