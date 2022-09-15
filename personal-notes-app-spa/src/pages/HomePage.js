import React from "react";
import { useSearchParams } from "react-router-dom";
import ButtonAdd from "../components/ButtonAdd";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  function changeSearchParams(query) {
    setSearchParams({ query });
  }

  return <HomePage defaultValue={query} valueChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
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
        <h2 className="text-2xl font-medium">Catatan Aktif</h2>
        <SearchBar
          query={this.state.query}
          valueChange={this.onValueChangeHandler}
        />
        <NoteList notes={notes} />
        <div className="bottom-8 flex gap-4 fixed right-8">
          <ButtonAdd />
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;
