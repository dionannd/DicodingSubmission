import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteArchiveList from "../components/NoteArchiveList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  function changeSearchParams(query) {
    setSearchParams({ query });
  }

  return <ArchivePage defaultValue={query} valueChange={changeSearchParams} />;
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      query: "",
    };

    this.onValueChangeHandler = this.onValueChangeHandler.bind(this);
  }

  onValueChangeHandler(query) {
    this.setState(() => {
      return {
        query,
      };
    });

    this.props.valueChange(query);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.query.toLowerCase());
    });

    return (
      <section>
        <h2 className="text-2xl font-medium">Catatan Arsip</h2>
        <SearchBar
          query={this.state.query}
          valueChange={this.onValueChangeHandler}
        />
        <NoteArchiveList notes={notes} />
      </section>
    );
  }
}

export default ArchivePageWrapper;
