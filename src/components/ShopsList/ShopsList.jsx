import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDrugStores } from "../../redux/drugStoresReducer";
import useDrugStores from "hooks/useRedux";
import PropTypes from "prop-types";

const ShopsList = ({ setIdShop }) => {
  const dispatch = useDispatch();
  const { providers } = useDrugStores();

  useEffect(() => {
    dispatch(fetchDrugStores({ page: 1, pageSize: 20 }));
  }, [dispatch]);

  const handleShopClick = (id) => {
    setIdShop(id);
  };

  return (
    <div className=" w-1/4 overflow-auto max-h-screen px-4 py-4 border rounded-lg">
      <aside className=" bg-gray-100 p-4">
        <h2 className="font-bold mb-3">Shops:</h2>
        <ul className="space-y-2">
          {providers.data.map((shop) => (
            <li key={shop._id}>
              <button
                onClick={() => handleShopClick(shop._id)}
                className="bg-white p-3 hover:bg-gray-200 rounded cursor-pointer"
              >
                {shop.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ShopsList;

ShopsList.propTypes = {
  setIdShop: PropTypes.func.isRequired,
};
