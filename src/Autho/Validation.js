import * as Yup from "yup";

export const validationSignup = Yup.object({
  email: Yup.string().email().required("Required"),
  confirm: Yup.string()
    .email()
    .required("Required")
    .oneOf([Yup.ref("email"), null], "Email Address must match"),
  password: Yup.string()
    .min(5, "Must have atleast 5 characters")
    .required("Required"),
  name: Yup.string()
    .min(5, "Must be atleast 5 characters or more")
    .max(15, "Max 15 characters")
    .required("Required"),
    year: Yup.string().max(4)
     .required("Required"),
    month: Yup.string()
     .required("Required"),
    date: Yup.string().max(2)
    .required("Required"),
    gender: Yup.string().required("Required"),
});

export const validationLogin = Yup.object({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
  .min(5, "Must have atleast 5 characters")
  .required("Required")
});
