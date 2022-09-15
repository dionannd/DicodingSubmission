import React from "react";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function NoteDetail({ title, createdAt, body }) {
  return (
    <section className="mt-8 mx-auto mb-0 w-[90%]">
      <h3 className="detail-page__title text-[40px] mb-2 break-words font-semibold">
        {title}
      </h3>
      <p className="text-gray-300">{showFormattedDate(createdAt)}</p>
      <div className="text-lg mt-9 leading-normal">{parser(body)}</div>
    </section>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
