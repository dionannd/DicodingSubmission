import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonArchive from "../components/ButtonArchive";
import ButtonDelete from "../components/ButtonDelete";
import ButtonEdit from "../components/ButtonEdit";
import NoteDetail from "../components/NoteDetail";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import PageNotFound from "./404Page";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} defaultValue={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onArchiveHandler(id) {
    this.props.navigate("/");

    this.setState({
      notes: archiveNote(id),
    });
  }

  onUnarchiveHandler(id) {
    this.props.navigate("/archives");

    this.setState({
      notes: unarchiveNote(id),
    });
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.props.navigate(this.state.notes.archived !== true ? "/" : "/archives");

    this.setState(() => {
      return {
        notes: getNote(id),
      };
    });
  }

  render() {
    return (
      <>
        {this.state.notes === undefined ? (
          <PageNotFound />
        ) : (
          <>
            <NoteDetail {...this.state.notes} />
            <div className="bottom-8 flex gap-4 fixed right-8">
              <ButtonEdit id={this.state.notes.id} />
              <ButtonArchive
                notes={this.state.notes.archived}
                id={this.state.notes.id}
                onArchive={this.onArchiveHandler}
                onUnarchive={this.onUnarchiveHandler}
              />
              <ButtonDelete
                id={this.state.notes.id}
                onDelete={this.onDeleteHandler}
              />
            </div>
          </>
        )}
      </>
    );
  }
}

export default DetailPageWrapper;
