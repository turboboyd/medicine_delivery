import React, { useState } from "react";
import ShopsList from "../components/ShopsList/ShopsList";
import ProductList from "../components/ProductList/ProductList";

const ShopsPage = () => {
  const [idShop, setIdShop] = useState("65e307adbff50d7bf6e1c2b1");

  const handleAddToCart = (product, idShop) => {
    console.log("add", product);
  };

  return (
    <div className="container mx-auto px-4 flex gap-5 max-h-[80vh]">
      <ShopsList setIdShop={setIdShop} />
      <ProductList idShop={idShop} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ShopsPage;
