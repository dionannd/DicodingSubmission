import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteArchiveList from "../components/NoteArchiveList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

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
      notes: [],
      query: "",
      loading: true,
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

  async componentDidMount() {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        notes: data,
        loading: false,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.query.toLowerCase());
    });

    return (
      <>
        {this.state.loading ? (
          <div className="flex items-center justify-center w-full mt-8">
            <h2 className="text-lg text-gray-300">Loading...</h2>
          </div>
        ) : (
          <LocaleConsumer>
            {({ locale }) => (
              <section>
                <h2 className="text-2xl font-medium">
                  {locale === "id" ? "Catatan Arsip" : "Archived Notes"}
                </h2>
                <SearchBar
                  query={this.state.query}
                  valueChange={this.onValueChangeHandler}
                />
                <NoteArchiveList notes={notes} />
              </section>
            )}
          </LocaleConsumer>
        )}
      </>
    );
  }
}

export default ArchivePageWrapper;
