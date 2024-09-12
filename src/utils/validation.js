export const validateField = (name, value, rules) => {
  const errors = [];

  rules.forEach((rule) => {
    if (rule.required && !value) {
      errors.push(`${name} is required.`);
    }

    if (rule.minLength && value.length < rule.minLength) {
      errors.push(
        `${name} must be at least ${rule.minLength} characters long.`
      );
    }

    if (rule.maxLength && value.length > rule.maxLength) {
      errors.push(
        `${name} must be less than ${rule.maxLength} characters long.`
      );
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      errors.push(`${name} is not valid.`);
    }
  });

  return errors.length > 0 ? errors : null;
};
