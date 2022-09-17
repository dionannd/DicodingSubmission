import React from "react";
import PropTypes from "prop-types";
import ButtonSubmit from "./ButtonSubmit";

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.notes.id,
      title: this.props.notes.title,
      body: this.props.notes.body,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    const trimSpaces = (string) => {
      return string
        .replace(/&nbsp;/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&gt;/g, ">")
        .replace(/<br>/g, " ")
        .replace(/&lt;/g, "<");
    };

    this.setState(() => {
      return {
        body: trimSpaces(event.target.innerHTML),
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.editNote(this.state);
  }

  render() {
    return (
      <div className="mt-8">
        <input
          type="text"
          placeholder="Judul Catatan"
          className="border-0 text-white bg-[#121212] text-6xl font-bold py-2 w-full focus:outline-none focus:ring-0"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />

        <div
          className="bg-[#121212] border border-white rounded-lg focus:outline-none text-white text-2xl min-h-[500px] p-2 w-full"
          placeholder="Isi Catatan..."
          contentEditable
          suppressContentEditableWarning
          onBlur={this.onBodyChangeEventHandler}
        >
          {this.state.body}
        </div>
        <div className="bottom-8 flex gap-4 fixed right-8">
          <ButtonSubmit onSubmit={this.onSubmitEventHandler} />
        </div>
      </div>
    );
  }
}

NoteEdit.propTypes = {
  editNote: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired,
};

export default NoteEdit;
