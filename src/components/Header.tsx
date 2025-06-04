import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <header>
      <div className="m-auto px-5 d-flex align-items-center justify-content-between">
        <Logo />
        <Navbar />
        <Searchbar />
      </div>
    </header>
  );
}
