import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ShopsPage from "./pages/ShopsPage";
import CartPage from "./pages/CartPage";
import Layout from "components/Layout/Layout";
import CartSuccessPage from "./pages/CartSuccessPage";

function App() {
  return (
    <Router basename="/medicine_delivery">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShopsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="success" element={<CartSuccessPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
