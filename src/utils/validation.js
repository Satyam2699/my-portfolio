export const validateForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Subject validation
  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters long";
  }

  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  } else if (formData.message.length > 500) {
    errors.message = "Message must be less than 500 characters";
  }

  return errors;
};

export const sanitizeInput = (input) => {
  return input.trim().replace(/[<>]/g, "");
};
