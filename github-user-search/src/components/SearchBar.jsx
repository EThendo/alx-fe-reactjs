export default function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    const value = e.target.value.trim();
    if (value.length > 0) {
      onSearch(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub username..."
        onChange={handleChange}
      />
    </div>
  );
}
