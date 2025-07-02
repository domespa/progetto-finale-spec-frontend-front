import { BrowserRouter, Route, Routes } from "react-router";
import { GlobalProvider } from "./context/GlobalContext";

// LAYOUTS
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Compare from "./pages/Compare";

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />}></Route>
            <Route index path="/products" element={<Products />}></Route>
            <Route index path="/products/:id" element={<ProductDetail />} />
            <Route index path="compare" element={<Compare />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}
