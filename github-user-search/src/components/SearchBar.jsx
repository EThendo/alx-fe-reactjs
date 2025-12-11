import { useState } from "react";

export default function SearchBar({ onAdvancedSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdvancedSearch({
      username: username.trim(),
      location: location.trim(),
      minRepos: minRepos.trim(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-4 max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-700">Advanced Search</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border p-2 rounded-md"
      />

      <input
        type="text"
        placeholder="Location (e.g. South Africa)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border p-2 rounded-md"
      />

      <input
        type="number"
        placeholder="Minimum Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="w-full border p-2 rounded-md"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
