import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api";
import { showFormattedDate } from "../utils";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "../components/ArchiveButton";
import Loading from "../components/Loading";

function Detailpage() {
  const [note, setNote] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const { id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, []);

  async function onArchiveHandler(id) {
    if (note.archived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }

    navigate(note.archived ? "/archives" : "/");
  }

  async function onDeleteHandler(id) {
    await deleteNote(id);

    navigate(note.archived ? "/archives" : "/");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="detail-page__body">{note.body}</div>
      <div className="detail-page__action">
        <ArchiveButton
          onArchive={onArchiveHandler}
          id={id}
          isArchive={note.archived}
        />
        <DeleteButton onDelete={onDeleteHandler} id={id} />
      </div>
    </section>
  );
}

export default Detailpage;
