export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl w-64 text-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-20 h-20 mx-auto rounded-full"
      />

      <h3 className="mt-3 text-lg font-bold">{user.login}</h3>

      <p className="text-sm text-gray-500">ID: {user.id}</p>
      <p className="text-sm text-gray-500">Score: {user.score}</p>

      <a
        href={user.html_url}
        target="_blank"
        className="text-blue-600 hover:underline block mt-2"
      >
        View Profile
      </a>
    </div>
  );
}
