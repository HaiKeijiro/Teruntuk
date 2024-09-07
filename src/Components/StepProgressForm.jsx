import React from "react";
import { Check } from "../assets/Icons";

const StepProgressForm = ({ currentStep }) => {
  const steps = [
    { name: "Pasangan" },
    { name: "Acara" },
    { name: "Additional" },
  ];

  return (
    <div className="flex justify-center items-center w-full gap-x-32 mx-auto py-4">
      {steps.map((step, index) => (
        <div className="flex items-center">
          <StepItem
            key={index}
            step={step}
            isActive={currentStep === index}
            isCompleted={currentStep > index}
          />
        </div>
      ))}
    </div>
  );
};

const StepItem = ({ step, isActive, isCompleted }) => (
  <div className="flex items-center gap-x-3">
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${
        isCompleted ? "bg-main" : isActive ? "bg-main" : "border-4 border-main"
      }`}
    >
      {isCompleted ? <Check color="white" width="18" height="18" /> : ""}
    </div>
    <span className={`${isActive ? "font-bold" : "font-normal"}`}>
      {step.name}
    </span>
  </div>
);

export default StepProgressForm;
