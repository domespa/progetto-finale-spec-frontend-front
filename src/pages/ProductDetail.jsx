import { useParams, useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
const { VITE_API_URL } = import.meta.env;
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { handleAddToWish } from "../utils/handleAddToWish";
import { Toast } from "primereact/toast";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const toastBL = useRef(null);
  const { addToWish, wishlist } = useContext(GlobalContext);

  const addToWishHandler = handleAddToWish({
    onAddToWish: addToWish,
    toastRef: toastBL,
    wishlist,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resp = await fetch(`${VITE_API_URL}/products/${id}`);
        if (!resp.ok) throw new Error("Prodotto non trovato");
        const data = await resp.json();
        setProduct(data.product);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Caricamento prodotto...</p>;
  if (error)
    return (
      <p>
        Errore: <strong>{error.message}</strong>
      </p>
    );
  return (
    <div className="container p-5">
      <h1 className="mb-4 text-white text-center">{product.title}</h1>
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-5 rounded">
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Categoria:</strong> {product.category}
            </li>
            {product.brand && (
              <li className="list-group-item">
                <strong>Marca:</strong> {product.brand}
              </li>
            )}
            {product.speedCpu && (
              <li className="list-group-item">
                <strong>CPU:</strong> {product.cpu} ({product.speedCpu} GHz)
              </li>
            )}
            {product.ram && (
              <li className="list-group-item">
                <strong>RAM:</strong> {product.ram} GB
              </li>
            )}
            {product.storage && (
              <li className="list-group-item">
                <strong>Hard Drive:</strong> {product.hardDriveType} -{" "}
                {product.storage} GB
              </li>
            )}
            {product.gpuRam && (
              <li className="list-group-item">
                <strong>GPU Ram:</strong> {product.gpuRam} GB
              </li>
            )}
            {product.screenInch && (
              <li className="list-group-item">
                <strong>Schermo:</strong> {product.screenInch}"
              </li>
            )}
            {product.refreshRate && (
              <li className="list-group-item">
                <strong>Frequenza d'aggiornamento:</strong>{" "}
                {product.refreshRate} Hz
              </li>
            )}
            {product.releaseYear && (
              <li className="list-group-item">
                <strong>Anno di rilascio:</strong> {product.releaseYear}
              </li>
            )}
            {product.price && (
              <li className="list-group-item">
                <strong>Prezzo:</strong> € {product.price}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3 gap-3">
        <button
          label="Success"
          severity="success"
          className="btn btn-secondary mb-3"
          onClick={(e) => addToWishHandler(e, product)}
        >
          Aggiungi ai preferiti
        </button>
        <Toast ref={toastBL} position="bottom-left" />
        <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} /> Torna indietro
        </button>
      </div>
    </div>
  );
}
