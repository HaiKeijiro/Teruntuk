import React from "react";

const NavigationButtons = ({
  currentStep,
  onCancel,
  onPrevious,
  onNext,
  onSubmit,
  isDirty,
  isValid, // form validation
  isSubmitting, // submit form
}) => {
  return (
    <div className="flex justify-between mt-4">
      {/* Cancel Button */}
      <button type="button" className="btn-secondary" onClick={onCancel}>
        Cancel
      </button>

      <button onClick={onPrevious} className="bg-gray-300 text-gray-700">
        Previous
      </button>

      {/* Next Button */}
      {currentStep < 2 ? (
        <button
          type="button"
          onClick={onNext}
          disabled={!(isValid && isDirty)}
          className={`mt-4 px-4 py-2 bg-main text-white rounded ${
            !(isValid && isDirty) ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      ) : (
        /* Submit Button */
        <button
          type="submit"
          className={`btn-primary ${
            isSubmitting ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSubmitting}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
