import React from "react";
import PropTypes from "prop-types";
import ButtonSubmit from "./ButtonSubmit";
import { LocaleConsumer } from "../contexts/LocaleContext";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
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

    if (this.state.title === "") {
      alert("Judul tidak boleh kosong");
      return;
    }

    this.props.addNote(this.state);
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => (
          <div className="mt-8">
            <input
              type="text"
              placeholder={locale === "id" ? "Judul Catatan" : "Title Note"}
              className="w-full py-2 text-[#333] text-6xl font-bold bg-transparent border-0 focus:outline-none focus:ring-0"
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />

            <div
              className="bg-transparent text-[#333] rounded-lg focus:outline-none text-2xl min-h-[500px] p-2 w-full"
              placeholder={locale === "id" ? "Isi Catatan..." : "Body Note..."}
              contentEditable
              suppressContentEditableWarning
              onInput={this.onBodyChangeEventHandler}
            />
            <div className="fixed flex gap-4 bottom-8 right-8">
              <ButtonSubmit onSubmit={this.onSubmitEventHandler} />
            </div>
          </div>
        )}
      </LocaleConsumer>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
