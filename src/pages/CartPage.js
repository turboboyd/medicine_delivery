// src/pages/CartPage.js
import React from "react";
import NavigationTabs from "../components/NavigationTabs";
import MapArea from "../components/MapArea";
import AddressForm from "../components/AddressForm";
import OrderSummary from "../components/OrderSummary";
// Добавьте ProductCard после определения логики продуктов

const CartPage = () => {
  return (
    <div>
      <NavigationTabs />
      <MapArea />
      <AddressForm />
      <OrderSummary />
      {/* Добавьте список ProductCard */}
    </div>
  );
};

export default CartPage;
