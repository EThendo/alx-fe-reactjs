import UserCard from "./UserCard";

export default function UserList({ users }) {
  if (users.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
