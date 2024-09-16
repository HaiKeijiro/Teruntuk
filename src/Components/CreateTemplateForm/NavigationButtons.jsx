import React from "react";

const NavigationButtons = ({
  currentStep,
  onCancel,
  onPrevious,
  onNext,
  onSubmit,
  isValid,
}) => {
  const renderButtons = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <Button className="bg-gray-300 text-gray-700" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              onClick={onNext}
              className={!isValid ? "bg-main/50 text-white" : "bg-main text-white"}
              disabled={!isValid}
            >
              Next
            </Button>
          </>
        );
      case 1:
        return (
          <>
            <Button onClick={onPrevious} className="bg-gray-300 text-gray-700">
              Previous
            </Button>
            <Button
              onClick={onNext}
              className="bg-main text-white"
              disabled={!isValid}
            >
              Next
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <Button onClick={onPrevious} className="bg-gray-300 text-gray-700">
              Previous
            </Button>
            <Button
              className="bg-main text-white"
              onClick={onSubmit}
              disabled={!isValid}
            >
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
    className={`rounded px-4 py-2 cursor-pointer ${className}`}
    type="button"
  >
    {children}
  </button>
);

export default NavigationButtons;
