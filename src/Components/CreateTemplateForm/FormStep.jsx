import React from "react";
import { pairingFields, eventFields, additionalFields } from "../CreateTemplateForm/FormField";

const FormStep = ({ step }) => {
  const steps = [
    { title: "Pasangan", fields: pairingFields },
    { title: "Acara", fields: eventFields },
    { title: "Additional", fields: additionalFields },
  ];

  if (step >= steps.length) {
    return <div>Unknown Step</div>;
  }

  const { title, fields } = steps[step];
  return <StepContent title={title} fields={fields} />;
};

const StepContent = ({ title, fields }) => (
  <div className="bg-[#F5F1EE] p-10 rounded-sm">
    <h4 className="text-sm-h4 md:text-md-h4 lg:text-h4 mb-4 uppercase font-medium">
      {title}
    </h4>
    <div className="grid grid-cols-12 gap-4">
      {fields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}
    </div>
  </div>
);

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

export default FormStep;
