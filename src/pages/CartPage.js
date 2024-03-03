import AddressForm from "../components/AddressForm";
import OrderSummary from "../components/OrderSummary";
import CartProductCard from "components/CartProductCard/CartProductCard";


const CartPage = () => {
  return (
    <div className="container mx-auto px-4 relative">
      <div className="flex gap-8">
        <AddressForm />
        <CartProductCard />
      </div>
      <OrderSummary />
    </div>
  );
};

export default CartPage;
