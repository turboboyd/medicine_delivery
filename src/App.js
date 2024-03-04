import { HashRouter as Routes, Route } from "react-router-dom";
import ShopsPage from "./pages/ShopsPage";
import CartPage from "./pages/CartPage";
import Layout from "components/Layout/Layout";
import CartSuccessPage from "pages/CartSuccessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<CartSuccessPage />} />
      </Route>
    </Routes>
  );
}

export default App;
