import React, { useState } from "react";
import StepProgress from "../../Components/StepProgressForm";
import FormStep from "../../Components/CreateTemplateForm/FormStep";
import NavigationButtons from "../../Components/CreateTemplateForm/NavigationButtons";

const BuatUndangan = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleCancel = () => {
    alert("cancel");
  };
  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 2));
  const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const handleSubmit = () => {
    alert("handle submit");
  };

  return (
    <div className="p-8">
      <StepProgress currentStep={currentStep} />
      <form>
        <FormStep step={currentStep} />
        <NavigationButtons
          currentStep={currentStep}
          onCancel={handleCancel}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default BuatUndangan;
