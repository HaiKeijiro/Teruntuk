import React from "react";

const NavigationButtons = ({ currentStep, setCurrentStep }) => (
  <div className="mt-8 flex justify-between">
    <Button
      onClick={() => setCurrentStep(Math.max(currentStep - 1, 0))}
      disabled={currentStep === 0}
      className="bg-gray-300 text-gray-700"
    >
      Previous
    </Button>
    <Button
      onClick={() => setCurrentStep(Math.min(currentStep + 1, 2))}
      disabled={currentStep === 2}
      className="bg-blue-500 text-white"
    >
      Next
    </Button>
  </div>
);

const Button = ({ onClick, disabled, className, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`rounded px-4 py-2 ${className}`}
  >
    {children}
  </button>
);

export default NavigationButtons;
