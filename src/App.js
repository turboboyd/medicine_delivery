import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopsPage from "./pages/ShopsPage";
import CartPage from "./pages/CartPage";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/"
        element={<Layout />}
      >
        <Route path="/" element={<ShopsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
