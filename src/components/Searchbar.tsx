export default function Searchbar() {
  return (
    <div className="input-group" style={{ maxWidth: "300px" }}>
      <input type="text" placeholder="Cerca..." className="form-control" />
      <button type="button" className="btn btn-primary">
        Cerca
      </button>
    </div>
  );
}
