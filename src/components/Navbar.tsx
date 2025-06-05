import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
            Prodotti
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/compare">
            Compara
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
