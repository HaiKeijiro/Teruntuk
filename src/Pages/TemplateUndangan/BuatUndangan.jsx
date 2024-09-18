import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import FormField from "../../Components/CreateTemplateForm/FormField";
import {
  additionalFields,
  eventFields,
  pairingFields,
} from "../../Components/CreateTemplateForm/FormInputs";
import NavigationButtons from "../../Components/CreateTemplateForm/NavigationButtons";
import { CreateTemplateSchema } from "../../utils/validation";
import StepProgressForm from "../../Components/CreateTemplateForm/StepProgressForm";

const BuatUndangan = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Combine all fields for initial values dynamically
  const allFields = [...pairingFields, ...eventFields, ...additionalFields];
  const initialValues = allFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const steps = [
    {
      fields: pairingFields,
      validationSchema: CreateTemplateSchema[0],
    },
    {
      fields: eventFields,
      validationSchema: CreateTemplateSchema[1],
    },
    {
      fields: additionalFields,
      validationSchema: CreateTemplateSchema[2],
    },
  ];

  const handleCancel = () => {
    navigate(-1);
  };

  const handleNext = (validateForm, isValid) => {
    validateForm().then((errors) => {
      if (isValid && Object.keys(errors).length === 0) {
        setCurrentStep((prev) => prev + 1);
      }
    });
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const currentStepConfig = steps[currentStep - 1];

  return (
    <div>
      <StepProgressForm currentStep={currentStep} />
      <Formik
        initialValues={initialValues}
        validationSchema={currentStepConfig?.validationSchema}
        validateOnMount={true}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isValid, isDirty, isSubmitting, validateForm }) => (
          <Form className="grid grid-cols-12">
            {currentStepConfig?.fields.map((field) => (
              <FormField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                textarea={field.textarea}
                select={field.select}
                options={field.options}
                component={field.component}
                placeholder={field.placeholder}
                gridCols={field.gridCols}
              />
            ))}

            <NavigationButtons
              currentStep={currentStep}
              onCancel={handleCancel}
              onPrevious={handlePrevious}
              onNext={() => handleNext(validateForm, isValid)}
              isDirty={isDirty}
              isValid={isValid}
              onSubmit={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BuatUndangan;
