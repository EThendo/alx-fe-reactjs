import axios from "axios";

export const advancedUserSearch = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );
    return response.data.items; // list of users
  } catch (error) {
    console.error("Advanced Search API error:", error);
    throw error;
  }
};
