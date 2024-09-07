import React, { useState } from "react";
import StepProgressForm from "../../Components/StepProgressForm";
import FormStep from "../../Components/FormStep";
import NavigationButtons from "../../Components/NavigationButtons";

const BuatUndangan = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="p-8">
      <StepProgressForm currentStep={currentStep} />
      <div className="mt-8">
        <FormStep step={currentStep} />
      </div>
      <NavigationButtons
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
};

export default BuatUndangan;
