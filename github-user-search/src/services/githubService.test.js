import axios from "axios";
import { fetchUserData } from "./githubService";

jest.mock("axios");

describe("GitHub API Service", () => {
  it("calls the GitHub API endpoint with correct username", async () => {
    const username = "octocat";
    const mockData = { login: "octocat", id: 1 };

    axios.get.mockResolvedValue({ data: mockData });

    const data = await fetchUserData(username);

    expect(axios.get).toHaveBeenCalledWith(`https://api.github.com/users/${username}`);
    expect(data).toEqual(mockData);
  });

  it("throws an error when user is not found", async () => {
    axios.get.mockRejectedValue(new Error("User not found"));
    await expect(fetchUserData("nonexistentuser")).rejects.toThrow("User not found");
  });
});
