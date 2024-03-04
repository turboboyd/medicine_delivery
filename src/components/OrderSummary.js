import React from "react";

const OrderSummary = ({ submitForm }) => {
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
