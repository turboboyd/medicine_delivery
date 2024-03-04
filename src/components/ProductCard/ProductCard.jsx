import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cartReducer";
import PropTypes from "prop-types";

const ProductCard = ({ product, idShop }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const itemInCart = cart.find(
    (item) => item.medicineId === product._id && item.storeId === idShop
  );

  const handleAddToCart = () => {
    dispatch(addToCart({ product, storeId: idShop, quantity: 1 }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ medicineId: product._id, storeId: idShop }));
  };

  return (
    <li className="w-2/5 p-4 rounded shadow">
      <div className="h-28 bg-gray-300">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold mb-3">{product.name}</h3>
        {!itemInCart ? (
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Remove from Cart
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  idShop: PropTypes.string.isRequired,
};
