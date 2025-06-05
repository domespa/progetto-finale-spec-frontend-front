import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="m-auto px-5 d-flex align-items-center justify-content-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
