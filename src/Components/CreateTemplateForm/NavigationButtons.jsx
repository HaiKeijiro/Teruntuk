import React from "react";

const NavigationButtons = ({ currentStep, setCurrentStep }) => {
  const goToNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const renderButtons = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <Button className="bg-gray-300 text-gray-700">Cancel</Button>
            <Button onClick={goToNextStep} className="bg-main text-white">
              Next
            </Button>
          </>
        );
      case 1:
        return (
          <>
            <Button
              onClick={goToPreviousStep}
              className="bg-gray-300 text-gray-700"
            >
              Previous
            </Button>
            <Button onClick={goToNextStep} className="bg-main text-white">
              Next
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <Button
              onClick={goToPreviousStep}
              className="bg-gray-300 text-gray-700"
            >
              Previous
            </Button>
            <Button className="bg-main text-white">
              Submit
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return <div className="mt-8 flex justify-between">{renderButtons()}</div>;
};

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
