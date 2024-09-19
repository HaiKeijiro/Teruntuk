import React from "react";
import { Field, ErrorMessage } from "formik";

const FormField = ({
  name,
  label,
  type = "text",
  textarea,
  placeholder = "",
  select,
  options = [],
  component: Component,
  gridCols,
  onChange
}) => (
  <div className={`${gridCols}`}>
    <label htmlFor={name} className="block mb-2 capitalize">
      {label}
      <span className="text-red-500">*</span>
    </label>
    {textarea ? (
      <Field
        as="textarea"
        id={name}
        name={name}
        className="w-full border border-gray-300 px-4 py-2 rounded"
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
      />
    ) : select ? (
      <Field
        as="select"
        id={name}
        name={name}
        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
        aria-label={label}
        onChange={onChange}
      >
        <option value="" disabled>
          Please select
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </Field>
    ) : Component ? (
      <Field name={name} component={Component} placeholder={placeholder} />
    ) : (
      <Field
        type={type}
        id={name}
        name={name}
        className="w-full border border-gray-300 px-4 py-2 rounded"
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
      />
    )}
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);

export default FormField;
