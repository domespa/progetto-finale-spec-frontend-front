import { useContext, useState, useMemo, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar.jsx";
import { handleAddToWish } from "../utils/handleAddToWish.js";
import { Toast } from "primereact/toast";

export default function Products() {
  const { products, addToWish, wishlist } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState(1);
  const toastBL = useRef(null);

  const addToWishHandler = handleAddToWish({
    onAddToWish: addToWish,
    toastRef: toastBL,
    wishlist,
  });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => prev * -1);
    } else {
      setSortBy(field);
      setSortOrder(1);
    }
  };

  const sortedProduct = useMemo(() => {
    return [...products].sort((a, b) => {
      let comparison;
      if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title);
      } else if (sortBy === "category") {
        comparison = a.category.localeCompare(b.category);
      }
      return comparison * sortOrder;
    });
  }, [products, sortBy, sortOrder]);

  const filteredProducts = sortedProduct.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container pt-5 pb-5">
      <Toast ref={toastBL} position="bottom-left" />
      <div className="d-flex justify-content-center align-items-center mb-3">
        <Searchbar search={search} setSearch={setSearch} />
      </div>
      <div className="row">
        <h2 className="text-center text-white">Prodotti disponibili</h2>
        <div className="order-container">
          <button onClick={() => handleSort("title")}>
            Titolo
            {sortBy === "title"
              ? sortOrder === 1
                ? " - Az ⬆️"
                : " - Za ⬇️"
              : ""}
          </button>
          <button onClick={() => handleSort("category")}>
            Categoria
            {sortBy === "category"
              ? sortOrder === 1
                ? " - Az ⬆️"
                : " - Za ⬇️"
              : ""}
          </button>
        </div>
        {filteredProducts.map((p) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            key={p.id}
          >
            <Card
              id={p.id}
              title={p.title}
              image={p.image}
              category={p.category}
              onAddToWish={(e) => addToWishHandler(e, p)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
