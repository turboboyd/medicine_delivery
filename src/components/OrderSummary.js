import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = ({ submitForm }) => {

    const cart = useSelector((state) => state.cart.cart);
    console.log('cart: ', cart);
  return (
    <div>
      <p> Order summary</p>
      <button
        type="button"
        onClick={submitForm} 
        className="w-32 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50 mt-4"
      >
        Submit
      </button>
    </div>
  );
};

export default OrderSummary;
