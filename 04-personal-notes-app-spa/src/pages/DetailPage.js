import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonArchive from "../components/ButtonArchive";
import ButtonDelete from "../components/ButtonDelete";
import NoteDetail from "../components/NoteDetail";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api";
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
      notes: undefined,
      loading: true,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  async onArchiveHandler(id) {
    await archiveNote(id);
    this.props.navigate("/");

    const { data } = this.state.notes;
    this.setState(() => {
      return {
        notes: data,
        loading: false,
      };
    });
  }

  async onUnarchiveHandler(id) {
    await unarchiveNote(id);
    this.props.navigate("/archives");

    const { data } = this.state.notes;
    this.setState(() => {
      return {
        notes: data,
        loading: false,
      };
    });
  }

  async onDeleteHandler(id) {
    await deleteNote(id);
    this.props.navigate(this.state.notes.archived !== true ? "/" : "/archives");

    const { data } = this.state.notes;
    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        notes: data,
        loading: false,
      };
    });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="flex items-center justify-center w-full mt-8">
            <h2 className="text-lg text-gray-300">Loading...</h2>
          </div>
        ) : this.state.notes !== undefined ? (
          <>
            <NoteDetail {...this.state.notes} loading={this.state.loading} />
            <div className="fixed flex gap-4 bottom-8 right-8">
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
        ) : (
          <PageNotFound />
        )}
      </>
    );
  }
}

export default DetailPageWrapper;
