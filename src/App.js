import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
const ShopsPage = lazy(() => import("./pages/ShopsPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CartSuccessPage = lazy(() => import("pages/CartSuccessPage"));
const AllOrderPage = lazy(() => import("pages/AllOrderPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<CartSuccessPage />} />
        <Route path="/allOrder" element={<AllOrderPage />} />
      </Route>
    </Routes>
  );
}

export default App;
