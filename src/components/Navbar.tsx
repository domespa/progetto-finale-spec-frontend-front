import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

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
          <NavLink className="nav-link" to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
