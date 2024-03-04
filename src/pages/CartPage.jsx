import React, { useRef } from "react";
import CartForm from "../components/CartForm/CartForm";
import OrderSummary from "../components/OrderSummary";
import CartProductCard from "components/CartProductCard/CartProductCard";

const CartPage = () => {
  const formRef = useRef(null);
  const submitForm = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };
  return (
    <div className="container mx-auto px-4 relative">
      <div className="flex gap-8">
        <CartForm formRef={formRef} />
        <CartProductCard />
      </div>
      <OrderSummary submitForm={submitForm} />
    </div>
  );
};

export default CartPage;
