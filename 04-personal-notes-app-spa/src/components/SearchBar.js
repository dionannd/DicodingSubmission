import React from "react";
import PropTypes from "prop-types";

function SearchBar({ query, valueChange }) {
  return (
    <section>
      <input
        className="bg-[#121212] text-sm border border-white rounded text-white my-4 p-2 w-full focus:ring-0 focus:outline-none placeholder:text-gray-500"
        type="text"
        placeholder="Cari berdasarkan judul..."
        value={query}
        onChange={(event) => valueChange(event.target.value)}
      />
    </section>
  );
}

SearchBar.propType = {
  query: PropTypes.string.isRequired,
  valueChange: PropTypes.func.isRequired,
};

export default SearchBar;
