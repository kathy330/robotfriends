import React from "react";

function SearchBox({ searchChange }) {
  return (
    <>
      <input
        className="pa3 ba b--green bg-light-green"
        type="search"
        placeholder="search robot"
        onChange={searchChange}
      />
    </>
  );
}

export default SearchBox;
