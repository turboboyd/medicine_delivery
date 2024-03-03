import React from "react";

const OrderSummary = ({ onSubmit }) => {
  // Здесь будет форма итога заказа
  return (
    <div>
      <p> Итог заказа</p>
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Place1 Order
      </button>
    </div>
  );
};

export default OrderSummary;
