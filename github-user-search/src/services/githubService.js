import axios from "axios";

// Advanced search function
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};
