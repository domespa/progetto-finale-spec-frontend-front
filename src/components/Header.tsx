import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <header>
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <Logo />
        <Navbar />
        <Searchbar />
      </div>
    </header>
  );
}
