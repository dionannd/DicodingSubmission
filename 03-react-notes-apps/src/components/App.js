import React from "react";
import { getInitialData } from "../utils/data";
import Footer from "./Footer";
import Header from "./Header";
import Input from "./Input";
import List from "./List";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: "",
    };

    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.addNotes = this.addNotes.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onDelete(id) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id),
    });
  }

  onArchive(id) {
    this.setState({
      notes: this.state.notes.map((note) => {
        return note.id === id ? { ...note, archived: !note.archived } : note;
      }),
    });
  }

  addNotes({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: Date.now(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearch(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        query: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <Header />
        <div className="note-app__body">
          <Input addNotes={this.addNotes} />
          <List
            notes={this.state.notes}
            onDelete={this.onDelete}
            onArchive={this.onArchive}
            query={this.state.query}
            onSearch={this.onSearch}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default NotesApp;
