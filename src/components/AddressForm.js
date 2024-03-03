import React, { useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"; // Убедитесь, что вы импортировали хук useDispatch
import { placeOrder } from "../redux/cart/cartReducer"; // Импортируйте action creator для размещения заказа

// Ваша схема валидации
const validationSchema = Yup.object().shape({
  address: Yup.string().required("Требуется адрес"),
  email: Yup.string().email("Неверный email").required("Требуется email"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Только цифры")
    .required("Требуется телефон"),
  name: Yup.string().required("Требуется имя"),
});

const InputField = ({ label, name, type, placeholder }) => (
  <label className="block">
    {label}:
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="mt-1 p-2 border border-gray-300 rounded w-full"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm"
    />
  </label>
);
const AddressForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const cartItems = useSelector((state) => state.cart.cart);
  // Обработчик отправки, адаптированный для использования с Formik
  const handleSubmit = (values) => {
    const orderData = {
      ...values,
      medicines: cartItems.map(({ medicineId, storeId, quantity }) => ({
        medicineId,
        storeId,
        quantity,
      })),
    };

    dispatch(placeOrder(orderData));
  };

  const submitForm = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  return (
    <div className="max-h-[70vh] w-1/2 overflow-auto max-h-screen px-4 py-4 border rounded-lg">
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
      <button
        type="button"
        onClick={submitForm} // Make sure to give your form an ID and reference it here
        className="w-32 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50 mt-4" // Corrected className for styling
      >
        Submit
      </button>
    </div>
  );
};

export default AddressForm;
