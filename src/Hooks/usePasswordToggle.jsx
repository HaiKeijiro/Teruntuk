import { useState, useCallback, useEffect } from "react";

const usePasswordToggle = (resetPasswordField) => {
  // Initialize state with the names of the fields you want to manage
  const [visibility, setVisibility] = useState({
    password: true,
    confirmPassword: true,
  });

  // Function to toggle visibility of a specific field
  const toggleVisibility = useCallback((field) => {
    setVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  }, []);

  // Effect to reset fields when necessary
  useEffect(() => {
    return () => {
      if (resetPasswordField) {
        resetPasswordField("password");
        resetPasswordField("confirmPassword");
      }
    };
  }, [resetPasswordField]);

  return {
    visibility,
    toggleVisibility,
  };
};

export default usePasswordToggle;
