import * as yup from "yup";

// rules for restricting the password
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";
// creating a validation schema
export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please, enter a valid email.")
    .required("Required field."),
  age: yup
    .number()
    .min(18, "No one under 18 is allowed.")
    .integer("Your age must be an integer."),
  password: yup
    .string()
    .min(5, "Paswsword must be at least 5 characters. ")
    .matches(regex, "The password is not strong enough.")
    .required("Required field."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "The password does not match.")
    .required("Required field."),
});
