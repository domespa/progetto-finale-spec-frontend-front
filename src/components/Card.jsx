import { Link } from "react-router-dom";

export default function Card({ id, title, image, category, onAddToWish }) {
  return (
    <div
      className="card d-flex flex-column justify-content-between"
      style={{ width: "18rem", height: "26rem", margin: "1rem" }}
    >
      <Link
        to={`/products/${id}`}
        className="text-decoration-none text-dark"
        style={{ flexGrow: 1 }}
      >
        <img
          className="card-img-top p-3"
          style={{ objectFit: "contain", height: "14rem" }}
          src={image}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <em>{category}</em>
          </p>
        </div>
      </Link>

      <div className="d-flex justify-content-end m-2">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            onAddToWish({ id, title, image, category });
          }}
        >
          Aggiungi ai preferiti
        </button>
      </div>
    </div>
  );
}
