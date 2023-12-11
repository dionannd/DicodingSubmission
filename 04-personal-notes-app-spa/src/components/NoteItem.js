import React from "react";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import { isTruncate, isTruncateTitle, showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import { LocaleConsumer } from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

function NoteItem({ title, body, createdAt, id }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <article
          className={`p-4 border border-t-4 rounded-lg ${
            theme === "dark" ? "border-white" : "border-[#121212]"
          }`}
        >
          <h3 className="text-lg font-semibold underline underline-offset-4">
            <Link to={`/notes/${id}`}>{isTruncateTitle(title)}</Link>
          </h3>
          <p className="text-sm text-gray-500">
            {showFormattedDate(createdAt, locale === "id" ? "id-ID" : "en-EN")}
          </p>
          <p className="mt-4 overflow-hidden leading-tight text-ellipsis">
            {parser(isTruncate(body))}
          </p>
        </article>
      )}
    </LocaleConsumer>
  );
}

NoteItem.propType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
