import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { getUser } from "./services/githubAPI";

export default function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    if (!username) return;
    const data = await getUser(username);
    setUser(data);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserCard user={user} />
    </div>
  );
}
