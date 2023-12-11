import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteArchiveList from "../components/NoteArchiveList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/api";

function ArchivePageWrapper({ locale }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  function changeSearchParams(query) {
    setSearchParams({ query });
  }

  return (
    <ArchivePage
      defaultValue={query}
      valueChange={changeSearchParams}
      locale={locale}
    />
  );
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
          <>
            <section>
              <h2 className="text-2xl font-medium">
                {this.props.locale === "id"
                  ? "Catatan Arsip"
                  : "Archived Notes"}
              </h2>
              <SearchBar
                query={this.state.query}
                valueChange={this.onValueChangeHandler}
                locale={this.props.locale}
              />
              <NoteArchiveList notes={notes} locale={this.props.locale} />
            </section>
          </>
        )}
      </>
    );
  }
}

export default ArchivePageWrapper;
