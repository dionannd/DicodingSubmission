import React from "react";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import { isTruncate, isTruncateTitle, showFormattedDate } from "../utils";
import { Link } from "react-router-dom";

function NoteItem({ title, body, createdAt, id }) {
  return (
    <article className="border border-white rounded-lg p-4 border-t-4">
      <h3 className="text-lg font-semibold underline underline-offset-4">
        <Link to={`/notes/${id}`}>{isTruncateTitle(title)}</Link>
      </h3>
      <p className="text-sm text-gray-300">{showFormattedDate(createdAt)}</p>
      <p className="mt-4 overflow-hidden text-ellipsis leading-tight">
        {parser(isTruncate(body))}
      </p>
    </article>
  );
}

NoteItem.propType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
