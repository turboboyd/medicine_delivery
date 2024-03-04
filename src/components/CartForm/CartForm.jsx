import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../redux/cart/cartReducer";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import PropTypes from "prop-types";

const validationSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Only digits allowed")
    .required("Phone number is required"),
  name: Yup.string().required("Name is required"),
});

const CartForm = ({ formRef }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const orderData = {
      ...values,
      medicines: cartItems.map(({ medicineId, storeId, quantity }) => ({
        medicineId,
        storeId,
        quantity,
      })),
    };

    dispatch(placeOrder(orderData))
      .unwrap()
      .then(() => {
        navigate("/success");
      })
      .catch((error) => {
        console.error("Order placement failed:", error);
      });
  };

  return (
    <div className=" w-1/2 overflow-auto max-h-screen px-4 py-4 border rounded-lg">
      <Formik
        innerRef={formRef}
        initialValues={{
          address: "",
          email: "",
          phoneNumber: "",
          name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <InputField
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputField
              label="Phone"
              name="phoneNumber"
              type="text"
              placeholder="Phone"
            />
            <InputField
              label="Address"
              name="address"
              type="text"
              placeholder="Address"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CartForm;

CartForm.propTypes = {
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
