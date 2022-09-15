import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteEdit from "../components/NoteEdit";
import { editNote, getNote } from "../utils/local-data";

function EditPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <EditPage id={id} navigate={navigate} />;
}

class EditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };

    this.onEditNoteHandler = this.onEditNoteHandler.bind(this);
  }

  onEditNoteHandler(note) {
    editNote(note);
    this.props.navigate(this.state.notes.archived !== true ? "/" : "/archives");
  }

  render() {
    return (
      <section>
        <NoteEdit editNote={this.onEditNoteHandler} notes={this.state.notes} />
      </section>
    );
  }
}

export default EditPageWrapper;
