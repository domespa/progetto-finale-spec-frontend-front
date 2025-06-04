import { Link } from "react-router-dom";
export default function Card({ id, title, image, category }) {
  return (
    <>
      <Link to={`/products/${id}`} className="text-decoration-none">
        <div
          className="card"
          style={{ width: "18rem", height: "26rem", margin: "1rem" }}
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
          <div className="d-flex flex-row-reverse m-2">
            <a href="#" className="btn btn-primary ">
              Aggiungi ai preferiti
            </a>
          </div>
        </div>
      </Link>
    </>
  );
}
