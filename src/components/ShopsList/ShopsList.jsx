import React, { useEffect, useState } from "react";
import { fetchDrugStores } from "../../services/drugStoreService";

const ShopsList = ({ setIdShop }) => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetchDrugStores()
      .then((data) => {
        setShops(data.data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке списка аптек:", error);
      });
  }, []);

  const handleShopClick = (id) => {
    setIdShop(id);
  };

  return (
    <aside className="w-1/5 bg-gray-100 p-4">
      <h2 className="font-bold mb-3">Shops:</h2>
      <ul className="space-y-2">
        {shops.map((shop) => (
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
  );
};

export default ShopsList;
