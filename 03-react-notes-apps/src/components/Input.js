import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      titleLimit: 50,
    };
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeTitle(event) {
    const maxLimit = 50;
    const limitInput = maxLimit - event.target.value.length;
    if (limitInput === -1) return 0;
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, maxLimit),
        titleLimit: limitInput,
      };
    });
  }

  onChangeBody(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState({
      title: "",
      body: "",
      titleLimit: 50,
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Catatan Baru</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.titleLimit}
        </p>
        <form onSubmit={this.onSubmit}>
          <input
            className="note-input__title"
            type="text"
            placeholder="Masukan judul catatan"
            value={this.state.title}
            onChange={this.onChangeTitle}
            required
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatan anda"
            value={this.state.body}
            onChange={this.onChangeBody}
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default Input;
