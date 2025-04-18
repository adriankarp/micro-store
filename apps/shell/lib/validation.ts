import * as yup from "yup";

// Login
export const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .lowercase()
      .max(254, "Email must be at most 254 characters")
      .email("Please enter a valid email address")
      .required("Email is required"),

    password: yup.string().required("Password is required"),
    // TODO: re-enable validation after implementing the service
    // .min(8, "Password must be at least 8 characters")
    // .max(128, "Password can’t exceed 128 characters")
    // .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    // .matches(/[a-z]/, "Must contain at least one lowercase letter")
    // .matches(/\d/, "Must contain at least one number")
    // .matches(
    //   /[!@#$%^&*(),.?":{}|<>]/,
    //   "Must contain at least one special character",
    // )
    // .matches(/^\S*$/, "Password cannot contain spaces"),
  })
  .required();
export type LoginFormValues = yup.InferType<typeof loginFormSchema>;

// Register
// TODO: Probably a setup account page with:
// First Name & Last Name, Phone Number, Date of Birth Subscribe to Newsletter, Terms & Conditions / Privacy Policy Acceptance
export const registerFormSchema = yup
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

    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();
export type RegisterFormValues = yup.InferType<typeof registerFormSchema>;

// Forgot password
export const forgotPasswordFormSchema = yup
  .object({
    email: yup
      .string()
      .trim()
      .lowercase()
      .max(254, "Email must be at most 254 characters")
      .email("Please enter a valid email address")
      .required("Email is required"),
  })
  .required();
export type ForgotPasswordFormValues = yup.InferType<
  typeof forgotPasswordFormSchema
>;
