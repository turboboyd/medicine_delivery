const ProductCard = ({ product, onAddToCart }) => {
  return (
    <li className="w-1/4 p-2 m-2 bg-white rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-3">
        <h3 className="font-bold mb-3">{product.name}</h3>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
