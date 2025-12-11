export default function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: "80px", borderRadius: "50%" }}
      />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
}
