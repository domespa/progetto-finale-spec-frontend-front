import { createContext, useEffect, useState, useReducer } from "react";
const { VITE_API_URL } = import.meta.env;

export const GlobalContext = createContext();

const initialWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.find((i) => i.id === action.payload.id)) return state;
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((i) => i.id !== action.payload);
    case "RESET":
      return [];
    default:
      return state;
  }
}

export function GlobalProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [wishlist, dispatchWishlist] = useReducer(
    wishlistReducer,
    initialWishlist
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await fetch(`${VITE_API_URL}/products`);
        if (!resp.ok) throw new Error("Errore nel fetch dei dati");
        const data = await resp.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToWish = (product) =>
    dispatchWishlist({ type: "ADD", payload: product });
  const removeFromWish = (product) =>
    dispatchWishlist({ type: "REMOVE", payload: product.id });
  const resetWish = () => dispatchWishlist({ type: "RESET" });

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        wishlist,
        loading,
        error,
        addToWish,
        removeFromWish,
        resetWish,
        show,
        setShow,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
