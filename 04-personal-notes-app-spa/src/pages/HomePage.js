import React from "react";
import { useSearchParams } from "react-router-dom";
import ButtonAdd from "../components/ButtonAdd";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

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
    const { data } = await getActiveNotes();

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
            <h2 className="text-lg ">Loading...</h2>
          </div>
        ) : (
          <LocaleConsumer>
            {({ locale }) => (
              <section>
                <h2 className="text-2xl font-medium">
                  {locale === "id" ? "Catatan Aktif" : "Active Notes"}
                </h2>
                <SearchBar
                  query={this.state.query}
                  valueChange={this.onValueChangeHandler}
                />
                <NoteList notes={notes} />
                <div className="fixed flex gap-4 bottom-8 right-8">
                  <ButtonAdd />
                </div>
              </section>
            )}
          </LocaleConsumer>
        )}
      </>
    );
  }
}

export default HomePageWrapper;
