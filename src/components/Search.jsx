import { useEffect, useState } from "react";

export default function Search({ query, setQuery }) {

  return (
    <div>
      <input
        type="text"
        placeholder="Search for fruits"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
