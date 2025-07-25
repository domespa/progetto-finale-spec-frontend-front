import { useCallback, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
const { VITE_API_URL } = import.meta.env;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { debounce } from "../utils/debounce";
import Searchbar from "./Searchbar";

export default function CardCompare() {
  const { products, addToWish } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [prodToCompare, setProdToCompare] = useState([]);

  const handleSearch = useCallback(
    debounce((value) => setSearch(value), 500),
    [setSearch]
  );

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddProd = async (product) => {
    if (!prodToCompare.find((p) => p.id === product.id)) {
      const res = await fetch(`${VITE_API_URL}/products/${product.id}`);
      const data = await res.json();

      setProdToCompare((prev) => [...prev, data.product]);
      setSearch("");
    }
  };

  const handleRemove = (id) => {
    setProdToCompare((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="comp-container">
      <div className="search-compare">
        <Searchbar search={search} setSearch={setSearch} />

        {search && (
          <ul className="searchlist">
            {filteredProducts.map((p) => (
              <li
                key={p.id}
                onClick={() => handleAddProd(p)}
                className="searchlist-item"
              >
                <img src={p.image} style={{ width: "3rem" }} alt={p.title} />
                <h6>
                  {p.title} - ({p.category})
                </h6>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="comp-grid d-flex">
        {prodToCompare.length === 0 ? (
          <p>Nessun prodotto nel comparatore</p>
        ) : (
          prodToCompare.map((p) => (
            <div key={p.id} className="comp-card position-relative">
              <div className="position-absolute top-0 end-0 text-white">
                <button
                  style={{ padding: "4px", margin: "4px" }}
                  onClick={() => handleRemove(p.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <h5 style={{ marginLeft: "30px", marginRight: "30px" }}>
                {p.title}
              </h5>
              <div>
                <div className="comp-card-image">
                  <img src={p.image} alt={p.title} />
                </div>
                <div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Categoria:</strong> {p.category}
                    </li>
                    {p.brand && (
                      <li className="list-group-item">
                        <strong>Marca:</strong> {p.brand}
                      </li>
                    )}
                    {p.speedCpu && (
                      <li className="list-group-item">
                        <strong>CPU:</strong> {p.cpu} ({p.speedCpu} GHz)
                      </li>
                    )}
                    {p.ram && (
                      <li className="list-group-item">
                        <strong>RAM:</strong> {p.ram} GB
                      </li>
                    )}
                    {p.storage && (
                      <li className="list-group-item">
                        <strong>Hard Drive:</strong> {p.hardDriveType} -{" "}
                        {p.storage} GB
                      </li>
                    )}
                    {p.gpuRam && (
                      <li className="list-group-item">
                        <strong>GPU Ram:</strong> {p.gpuRam} GB
                      </li>
                    )}
                    {p.screenInch && (
                      <li className="list-group-item">
                        <strong>Schermo:</strong> {p.screenInch}"
                      </li>
                    )}
                    {p.refreshRate && (
                      <li className="list-group-item">
                        <strong>Frequenza d'aggiornamento:</strong>{" "}
                        {p.refreshRate} Hz
                      </li>
                    )}
                    {p.releaseYear && (
                      <li className="list-group-item">
                        <strong>Anno di rilascio:</strong> {p.releaseYear}
                      </li>
                    )}
                    {p.price && (
                      <li className="list-group-item">
                        <strong>Prezzo:</strong> € {p.price}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
