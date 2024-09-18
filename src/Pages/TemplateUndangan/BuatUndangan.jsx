import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import StepProgressForm from "../../Components/CreateTemplateForm/StepProgressForm";
import FormStep from "../../Components/CreateTemplateForm/FormStep";
import NavigationButtons from "../../Components/CreateTemplateForm/NavigationButtons";
import { CreateTemplateSchema, initialValues } from "../../utils/validation";
import FormikWrapper from "../../Components/CreateTemplateForm/FormikWrapper";

const BuatUndangan = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Get navigate function from useNavigate hook
  const navigate = useNavigate();

  // Load form values from local storage when component mounts
  const loadInitialValues = () => {
    const savedValues = localStorage.getItem("formValues");
    return savedValues ? JSON.parse(savedValues) : initialValues;
  };

  const handleCancel = () => alert("Cancel");

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log("Form submitted:", values);

    // Clear local storage and reset the form
    localStorage.removeItem("formValues");
    resetForm();

    // Navigate to invitation list
    navigate("dashboard/invitation-list");
  };

  return (
    <div className="p-8">
      <StepProgressForm currentStep={currentStep} />
      <Formik
        initialValues={loadInitialValues()}
        validationSchema={CreateTemplateSchema[currentStep]}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleSubmit, dirty }) => (
          <FormikWrapper>
            {({ setErrors, setTouched, resetForm, isValid }) => (
              <Form onSubmit={handleSubmit}>
                <FormStep step={currentStep} />
                <NavigationButtons
                  currentStep={currentStep}
                  onCancel={handleCancel}
                  onPrevious={() => {
                    setTouched({});
                    setErrors({});
                    setCurrentStep((prev) => Math.max(prev - 1, 0));
                  }}
                  onNext={() => {
                    setTouched({});
                    setErrors({});
                    setCurrentStep((prev) => Math.min(prev + 1, 2));
                  }}
                  isValid={isValid}
                  isDirty={dirty}
                  onSubmit={() => handleSubmit()} // Ensure submit handler is triggered
                  isSubmitting={isSubmitting} // Pass isSubmitting state to disable buttons while submitting
                />
              </Form>
            )}
          </FormikWrapper>
        )}
      </Formik>
    </div>
  );
};

export default BuatUndangan;
