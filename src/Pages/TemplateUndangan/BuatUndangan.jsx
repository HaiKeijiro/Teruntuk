import React, { useState } from "react";
import StepProgressForm from "../../Components/StepProgressForm";
import FormStep from "../../Components/CreateTemplateForm/FormStep";
import NavigationButtons from "../../Components/CreateTemplateForm/NavigationButtons";

const BuatUndangan = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="p-8">
      <StepProgressForm currentStep={currentStep} />
      <form>
        <div className="mt-8">
          <FormStep step={currentStep} />
        </div>
        <NavigationButtons
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </form>
    </div>
  );
};

export default BuatUndangan;
