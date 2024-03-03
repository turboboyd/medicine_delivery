import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartItem } from "../../redux/cart/cartReducer";

const CartProductCard = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log("cart: ", cart);

  const handleIncrement = (product) => {
    const newQuantity = product.quantity + 1;
    dispatch(
      updateCartItem({
        medicineId: product.medicineId,
        storeId: product.storeId,
        quantity: newQuantity,
      })
    );
  };

  const handleDecrement = (product) => {
    const newQuantity = product.quantity - 1;
    if (product.quantity > 1) {
      dispatch(
        updateCartItem({
          medicineId: product.medicineId,
          storeId: product.storeId,
          quantity: newQuantity,
        })
      );
    } else {
      dispatch(
        removeFromCart({
          medicineId: product.medicineId,
          storeId: product.storeId,
        })
      );
    }
  };

  return (
    <div className="max-h-[70vh]  w-1/2 overflow-auto max-h-screen px-4 py-4 border rounded-lg">
      <ul className="flex flex-col gap-4">
        {cart.map((product, i) => (
          <li key={i} className=" p-4 flex gap-4 border rounded-lg">
            <div className="image-placeholder bg-gray-300 w-24 h-28 w-1/2"></div>
            <div className="flex flex-col justify-between">
              <div className="product-name font-bold">{product.name}</div>
              <div>Price: {product.price}$</div>
              <div className="quantity-selector flex items-center gap-2">
                <button
                  className="px-3 py-1 border border-red-500 rounded bg-red-500 hover:bg-red-600 "
                  onClick={() => handleDecrement(product)}
                >
                  −
                </button>
                <input
                  className="w-12 py-1 text-center border rounded cursor-default "
                  type="number"
                  value={product.quantity}
                  readOnly
                />
                <button
                  className="px-3 py-1 border border-green-500 rounded bg-green-500 hover:bg-green-600 "
                  onClick={() => handleIncrement(product)}
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartProductCard;
