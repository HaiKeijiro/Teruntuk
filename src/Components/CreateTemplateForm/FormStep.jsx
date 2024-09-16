import React from "react";
import {
  pairingFields,
  eventFields,
  additionalFields,
} from "../CreateTemplateForm/FormInputs";
import FormField from "./FormField";

const steps = [
  { title: "Pasangan", fields: pairingFields },
  { title: "Acara", fields: eventFields },
  { title: "Additional", fields: additionalFields },
];

const FormStep = ({ step }) => {
  if (step >= steps.length) return <div>Unknown Step</div>;

  const { title, fields } = steps[step];
  return (
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
};

export default FormStep;
