export default function UserCard({ user }) {
  if (!user) return null;

  return (
    <div>
      <img src={user.avatar_url} width="100" />
      <h2>{user.login}</h2>
      <a href={user.html_url} target="_blank">View Profile</a>
    </div>
  );
}
