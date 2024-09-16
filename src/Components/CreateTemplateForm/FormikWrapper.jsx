import React from "react";
import { useFormikContext } from "formik";

const FormikWrapper = ({ children }) => {
  const formikContext = useFormikContext();

  // If the context is undefined, we should not render the children
  if (!formikContext) return null;

  const { setErrors, setTouched, resetForm, isValid, values, setFieldValue } =
    formikContext;

  return children({
    setErrors,
    setTouched,
    resetForm,
    isValid,
    values,
    setFieldValue,
  });
};

export default FormikWrapper;
