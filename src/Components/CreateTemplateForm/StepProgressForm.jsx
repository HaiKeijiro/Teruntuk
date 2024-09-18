import React from "react";
import { Check } from "../../assets/Icons";

const steps = [{ name: "Pasangan" }, { name: "Acara" }, { name: "Additional" }];

const StepProgressForm = ({ currentStep }) => (
  <div className="flex justify-evenly items-center w-full mx-auto py-4">
    {steps.map((step, index) => (
      <StepItem
        key={index}
        step={step}
        isActive={currentStep === index}
        isCompleted={currentStep > index}
      />
    ))}
  </div>
);

const StepItem = ({ step, isActive, isCompleted }) => (
  <div className="flex items-center gap-x-3">
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${
        isCompleted ? "bg-main" : isActive ? "bg-main" : "border-4 border-main"
      }`}
    >
      {isCompleted && <Check color="white" width="18" height="18" />}
    </div>
    <span className={`${isActive ? "font-bold" : "font-normal"}`}>
      {step.name}
    </span>
  </div>
);

export default StepProgressForm;
