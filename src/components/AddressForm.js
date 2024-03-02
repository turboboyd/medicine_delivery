// src/components/AddressForm.js
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  address: Yup.string().required("Обязательное поле"),
  email: Yup.string().email("Некорректный email").required("Обязательное поле"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Только цифры")
    .required("Обязательное поле"),
  name: Yup.string().required("Обязательное поле"),
});

const AddressForm = () => (
  <Formik
    initialValues={{
      address: "",
      email: "",
      phone: "",
      name: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="address" placeholder="Адрес" />
        <ErrorMessage name="address" component="div" />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field type="text" name="phone" placeholder="Телефон" />
        <ErrorMessage name="phone" component="div" />

        <Field type="text" name="name" placeholder="Имя" />
        <ErrorMessage name="name" component="div" />

        <button type="submit" disabled={isSubmitting}>
          Отправить
        </button>
      </Form>
    )}
  </Formik>
);

export default AddressForm;
