import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrders } from "../redux/cart/cartReducer";

const AllOrderPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cart.orders);
  const isLoading = useSelector((state) => state.cart.isLoading);
  const error = useSelector((state) => state.cart.error);

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 max-h-[80vh] overflow-auto">
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="mb-4 p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold">Order ID: {order._id}</h2>
            <p>Email: {order.email}</p>
            <p>Phone: {order.phoneNumber}</p>
            <p>Name: {order.name}</p>
            <p>Address: {order.address}</p>
            <div>
              <h3 className="font-semibold">Medicines:</h3>
              {order.medicines.map((medicine) => (
                <div key={medicine._id} className="ml-4">
                  <p>Medicine ID: {medicine.medicineId}</p>
                  <p>Store ID: {medicine.storeId}</p>
                  <p>Quantity: {medicine.quantity}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllOrderPage;
