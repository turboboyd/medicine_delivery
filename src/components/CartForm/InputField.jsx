import PropTypes from "prop-types"; 
import { Field, ErrorMessage } from "formik";

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

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired, 
  placeholder: PropTypes.string,
};

export default InputField;
