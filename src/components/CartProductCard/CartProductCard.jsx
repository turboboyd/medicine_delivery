import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartItem } from "../../redux/cart/cartReducer";

const CartProductCard = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleIncrement = useCallback(
    (medicineId, storeId, quantity) => {
      dispatch(
        updateCartItem({
          medicineId,
          storeId,
          quantity: quantity + 1,
        })
      );
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (medicineId, storeId, quantity) => {
      if (quantity > 1) {
        dispatch(
          updateCartItem({
            medicineId,
            storeId,
            quantity: quantity - 1,
          })
        );
      } else {
        dispatch(removeFromCart({ medicineId, storeId }));
      }
    },
    [dispatch]
  );

  return (
    <div className="  w-1/2 overflow-auto px-4 py-4 border rounded-lg">
      <ul className="flex flex-col gap-4">
        {cart.map((product, i) => (
          <li key={i} className="p-4 flex gap-4 border rounded-lg">
            <div className="w-1/2 h-28 bg-gray-300">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="font-bold">{product.name}</div>
              <div>Price: {product.price}$</div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Decrease quantity"
                  className="px-3 py-1 border border-red-500 rounded bg-red-500 hover:bg-red-600"
                  onClick={() =>
                    handleDecrement(
                      product.medicineId,
                      product.storeId,
                      product.quantity
                    )
                  }
                >
                  −
                </button>
                <input
                  className="w-12 text-center border rounded cursor-default"
                  type="number"
                  value={product.quantity}
                  readOnly
                />
                <button
                  aria-label="Increase quantity"
                  className="px-3 py-1 border border-green-500 rounded bg-green-500 hover:bg-green-600"
                  onClick={() =>
                    handleIncrement(
                      product.medicineId,
                      product.storeId,
                      product.quantity
                    )
                  }
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
