import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

function SearchBar({ query, valueChange }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section>
          <input
            className={`w-full p-2 my-4 text-sm  bg-transparent border  rounded focus:ring-0 focus:outline-none placeholder:text-gray-500 ${
              theme === "dark" ? "border-white" : "border-[#121212]"
            }`}
            type="text"
            placeholder={
              locale === "id"
                ? "Cari berdasarkan judul ..."
                : "Search by title ..."
            }
            value={query}
            onChange={(event) => valueChange(event.target.value)}
          />
        </section>
      )}
    </LocaleConsumer>
  );
}

SearchBar.propType = {
  query: PropTypes.string.isRequired,
  valueChange: PropTypes.func.isRequired,
};

export default SearchBar;
