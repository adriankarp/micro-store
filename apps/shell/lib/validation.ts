import * as yup from "yup";

export const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .lowercase()
      .max(254, "Email must be at most 254 characters")
      .email("Please enter a valid email address")
      .required("Email is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(128, "Password can’t exceed 128 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Must contain at least one special character",
      )
      .matches(/^\S*$/, "Password cannot contain spaces"),
  })
  .required();

export type LoginFormValues = yup.InferType<typeof loginFormSchema>;
