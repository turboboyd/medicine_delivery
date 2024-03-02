import React from "react";
import NavigationTabs from "../components/NavigationTabs";
import ShopsList from "../components/ShopsList/ShopsList";
import ProductList from "../components/ProductList/ProductList";
const products = [
  { id: 1, name: "Paracetamol", image: "paracetamol.png" },
  { id: 2, name: "Aspirin", image: "aspirin.png" },
  { id: 3, name: "Ibuprofen", image: "ibuprofen.png" },
  { id: 4, name: "Acetaminophen", image: "acetaminophen.png" },
  { id: 5, name: "Loratadine", image: "loratadine.png" },
  { id: 6, name: "Diphenhydramine", image: "diphenhydramine.png" },
  { id: 7, name: "Cetirizine", image: "cetirizine.png" },
  { id: 8, name: "Ranitidine", image: "ranitidine.png" },
  { id: 9, name: "Omeprazole", image: "omeprazole.png" },
  { id: 10, name: "Lansoprazole", image: "lansoprazole.png" },
  { id: 11, name: "Simvastatin", image: "simvastatin.png" },
  { id: 12, name: "Atorvastatin", image: "atorvastatin.png" },
  { id: 13, name: "Metformin", image: "metformin.png" },
  { id: 14, name: "Lisinopril", image: "lisinopril.png" },
  { id: 15, name: "Levothyroxine", image: "levothyroxine.png" },
  { id: 16, name: "Metoprolol", image: "metoprolol.png" },
  { id: 17, name: "Amlodipine", image: "amlodipine.png" },
  { id: 18, name: "Hydrochlorothiazide", image: "hydrochlorothiazide.png" },
  { id: 19, name: "Warfarin", image: "warfarin.png" },
  { id: 20, name: "Furosemide", image: "furosemide.png" },
];

const ShopsPage = () => {

  const handleAddToCart = (product) => {
    // TODO: Добавить логику для добавления товара в корзину
    console.log("Добавлено в корзину", product);
  };

  return (
    <div>
      <NavigationTabs />
      <ShopsList />
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ShopsPage;
