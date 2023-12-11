import React from "react";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NoteDetail({ title, createdAt, body }) {
  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section className="mt-8 mx-auto mb-0 w-[90%]">
          <h3 className="detail-page__title text-[40px] mb-2 break-words font-semibold">
            {title}
          </h3>
          <p className="text-gray-500">
            {showFormattedDate(createdAt, locale === "id" ? "id-ID" : "en-EN")}
          </p>
          <div className="text-lg leading-normal mt-9">{parser(body)}</div>
        </section>
      )}
    </LocaleConsumer>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
