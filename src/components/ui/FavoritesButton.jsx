import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function FavoritesButton() {
  const { show, setShow } = useContext(GlobalContext);

  return (
    <button
      onClick={() => setShow((prev) => !prev)}
      className="btn btn-primary position-fixed bottom-0 end-0 m-3 z-3
      "
    >
      {show ? "Chiudi" : "Preferiti"}
    </button>
  );
}
