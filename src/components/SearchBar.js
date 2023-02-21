import React from "react";

function SearchBar({search, handleSearch}) {
  return (
    <div className="search">
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
      <label>Search</label>
      <input placeholder="Who would you like to search for?" value={search} onChange={handleSearch}></input>
    </div>
  );
}

export default SearchBar;
