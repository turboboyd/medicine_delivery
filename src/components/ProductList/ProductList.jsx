import useDrugStores from "hooks/useRedux";
import ProductCard from "../ProductCard/ProductCard";
import { fetchMedicines } from "../../redux/drugStoresReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ProductList = ({ idShop, onAddToCart, storeId }) => {
  const dispatch = useDispatch();
  const { medicines } = useDrugStores();
  useEffect(() => {
    dispatch(fetchMedicines({ id: idShop, page: 1, pageSize: 20 }));
  }, [idShop, dispatch]);
  return (
    <ul className="w-4/5 p-4 flex flex-wrap justify-start items-stretch">
      {medicines.data.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          idShop={idShop}
          onAddToCart={onAddToCart}
        />
      ))}
    </ul>
  );
};

export default ProductList;
