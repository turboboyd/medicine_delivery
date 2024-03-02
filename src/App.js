import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopsPage from "./pages/ShopsPage";
import CartPage from "./pages/CartPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}



export default App;
