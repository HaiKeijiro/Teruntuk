import { useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import StepProgressForm from "../../Components/CreateTemplateForm/StepProgressForm";
import FormStep from "../../Components/CreateTemplateForm/FormStep";
import NavigationButtons from "../../Components/CreateTemplateForm/NavigationButtons";
import { CreateTemplateSchema, initialValues } from "../../utils/validation";

const FormikWrapper = ({ children }) => {
  const { setErrors, setTouched, resetForm, isValid } = useFormikContext();

  return children({ setErrors, setTouched, resetForm, isValid });
};

const BuatUndangan = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleCancel = () => alert("Cancel");

  return (
    <div className="p-8">
      <StepProgressForm currentStep={currentStep} />
      <Formik
        initialValues={initialValues}
        validationSchema={CreateTemplateSchema[currentStep]}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {() => (
          <FormikWrapper>
            {({ setErrors, setTouched, resetForm, isValid }) => (
              <Form>
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
