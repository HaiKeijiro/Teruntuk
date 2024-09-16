import React from "react";

const FormField = ({
  label,
  type = "text",
  textarea,
  placeholder = "",
  select,
  options = [],
  component: Component,
  gridCols = "col-span-1",
}) => (
  <div className={`mb-4 ${gridCols}`}>
    <label className="block mb-2 capitalize">
      {label}
      <span className="text-red-500">*</span>
    </label>
    {textarea ? (
      <textarea
        className="w-full border border-gray-300 px-4 py-2 rounded"
        placeholder={placeholder}
        aria-label={label}
      />
    ) : select ? (
      <select
        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
        aria-label={label}
      >
        <option value="" disabled>
          Please select
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : Component ? (
      <Component />
    ) : (
      <input
        type={type}
        className="w-full border border-gray-300 px-4 py-2 rounded"
        placeholder={placeholder}
        aria-label={label}
      />
    )}
  </div>
);

export default FormField;
