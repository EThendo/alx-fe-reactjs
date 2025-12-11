import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { advancedUserSearch } from "./services/githubAPI";

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const handleAdvancedSearch = async (filters) => {
    try {
      const results = await advancedUserSearch(filters);
      setUsers(results);
      setError(results.length === 0 ? "No users found." : "");
    } catch (err) {
      setError("Error fetching users.");
      setUsers([]);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">GitHub User Search</h1>

      <SearchBar onAdvancedSearch={handleAdvancedSearch} />

      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      <UserList users={users} />
    </div>
  );
}
