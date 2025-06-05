import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export default function Favorites() {
  const {
    addToWish,
    removeFromWish,
    resetWish,
    products,
    wishlist,
    show,
    setShow,
  } = useContext(GlobalContext);

  return (
    <div
      className="position-fixed bottom-0 end-0  shadow p-3 pref-container"
      style={{
        transform: show ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <h2>Preferiti</h2>
      {wishlist.length === 0 ? (
        <p>Nessun preferito</p>
      ) : (
        <>
          <ul>
            {wishlist.map((p) => (
              <li key={p.id}>
                {p.title} ( <em>{p.category} )</em>{" "}
                <button
                  className="btn btn-light"
                  onClick={() => removeFromWish(p)}
                >
                  Rimuovi
                </button>
              </li>
            ))}
          </ul>
          <div className="position-fixed bottom-0 end-0 mx-2 my-2 ">
            <button className="btn btn-warning" onClick={resetWish}>
              Svuota Preferiti
            </button>
          </div>
        </>
      )}
    </div>
  );
}
