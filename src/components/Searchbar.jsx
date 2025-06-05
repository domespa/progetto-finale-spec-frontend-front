import { useCallback } from "react";
//Funzione di debounce generica
function debounce(callback, delay) {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, delay);
  };
}

export default function Searchbar({ search, setSearch }) {
  const handleSearch = useCallback(
    debounce((value) => setSearch(value), 500),
    [setSearch]
  );
  return (
    <div className="input-group" style={{ maxWidth: "400px" }}>
      <input
        type="text"
        placeholder="Cerca..."
        className="form-control"
        defaultValue={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
