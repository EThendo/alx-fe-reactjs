import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { getUser } from "./services/githubAPI";

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const userData = await getUser(query);
      setUsers([userData]); // store single user in array
      setError(null);
    } catch (err) {
      setError("User not found");
      setUsers([]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>

      <SearchBar onSearch={handleSearch} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <UserList users={users} />
    </div>
  );
}
