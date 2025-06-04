import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Card from "../components/Card";

export default function Products() {
  const { products } = useContext(GlobalContext);

  return (
    <div className="container pt-5 pb-5 ">
      <div className="row">
        {products.map((p) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            key={p.id}
          >
            <Card
              id={p.id}
              title={p.title}
              image={p.image}
              category={p.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
