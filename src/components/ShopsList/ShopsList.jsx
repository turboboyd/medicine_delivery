const shops = ["Drugs 24", "Pharmacy", "etc."];

const ShopsList = () => {
  return (
    <aside className="w-1/5 bg-gray-100 p-4">
      <h2 className="font-bold mb-3">Shops:</h2>
      <ul className="space-y-2">
        {shops.map((shop, index) => (
          <li
            key={index}
            className="bg-white p-2 hover:bg-gray-200 rounded cursor-pointer"
          >
            {shop}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ShopsList;
