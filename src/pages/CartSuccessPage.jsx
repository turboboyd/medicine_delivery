import { Link } from "react-router-dom";

const CartSuccessPage = () => {
  return (
    <div className="container mx-auto mt-20 py-20 text-center border round">
      <h1 className="text-3xl font-bold mb-4">Order Successfully Placed!</h1>
      <p className="mb-4">
        Thank you for your order. We are processing it and will get back to you
        with the details soon.
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default CartSuccessPage;
