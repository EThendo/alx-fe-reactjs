import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "10px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}
