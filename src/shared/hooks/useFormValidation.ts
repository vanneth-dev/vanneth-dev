import { useState } from "react";
import { UserFormData } from "src/features/settings/users/types/user";

type ValidationErrors = {
  [key in keyof UserFormData]?: string;
};

export const useFormValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (data: UserFormData): boolean => {
    const newErrors: ValidationErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.nameKm.trim()) {
      newErrors.nameKm = "Khmer name is required";
    }

    if (!data.roles.length) {
      newErrors.roles = "At least one role must be selected";
    }

    if (!data.username.trim()) {
      newErrors.username = "Username is required";
    } else if (data.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!data.locale) {
      newErrors.locale = "Locale is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm };
};
