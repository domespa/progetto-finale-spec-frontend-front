import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Favorites from "../components/Favorites";
import FavoritesButton from "../components/ui/FavoritesButton";

export default function DefaultLayout() {
  return (
    <>
      <Favorites />
      <FavoritesButton />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
