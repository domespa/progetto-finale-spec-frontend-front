import { useContext, useState, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar.jsx";

export default function Products() {
  const { products, addToWish } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState(1);

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
      <div className="d-flex justify-content-center align-items-center mb-3">
        <Searchbar search={search} setSearch={setSearch} />
      </div>
      <div className="row">
        <h2 className="text-center text-white">Prodotti disponibili</h2>
        <div className="order-container">
          <button
            onClick={() => {
              setSortBy("title");
              setSortOrder(1);
            }}
          >
            Az ⬆️
          </button>
          <button
            onClick={() => {
              setSortBy("title");
              setSortOrder(-1);
            }}
          >
            Za ⬇️
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
              onAddToWish={addToWish}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
