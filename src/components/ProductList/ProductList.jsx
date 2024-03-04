import useDrugStores from "hooks/useRedux";
import ProductCard from "../ProductCard/ProductCard";
import { fetchMedicines } from "../../redux/drugStoresReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ProductList = ({ idShop, onAddToCart }) => {
  const dispatch = useDispatch();
  const { medicines } = useDrugStores();
  useEffect(() => {
    dispatch(fetchMedicines({ id: idShop, page: 1, pageSize: 20 }));
  }, [idShop, dispatch]);
  return (
    <div className=" w-4/5 overflow-auto max-h-screen px-4 py-4 border rounded-lg">
      <ul className="flex flex-wrap gap-8 justify-center">
        {medicines.data.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            idShop={idShop}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
};



export default ProductList;

ProductList.propTypes = {
  idShop: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func, 
};