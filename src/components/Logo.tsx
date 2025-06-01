import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="/Logo.png" alt="logo" className="rounded-circle py-3" />
    </Link>
  );
}
