import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <ul className="w-4/5 p-4 flex flex-wrap justify-start items-stretch">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </ul>
  );
};

export default ProductList;
