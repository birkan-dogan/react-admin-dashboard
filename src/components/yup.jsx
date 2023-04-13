import * as yup from "yup";

// regEx for phone number validation
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// this schema consist of the validation logic for each field that we're using
const userSchema = yup.object().shape({
  firstName: yup.string().trim().required("required"),
  lastName: yup.string().trim().required("required"),
  email: yup.string().trim().email("invalid email").required("required"),
  contact: yup
    .string()
    .trim()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().trim().required("required"),
  address2: yup.string().trim().required("required"),
});

export default userSchema;

// this array will loop over on Form page to create TextFields :)
export const formData = [
  {
    id: 1,
    label: "First Name",
    name: "firstName",
    sx: "span 2",
  },
  {
    id: 2,
    label: "Last Name",
    name: "lastName",
    sx: "span 2",
  },
  { id: 3, label: "Email", name: "email", sx: "span 4" },
  {
    id: 4,
    label: "Contact Number",
    name: "contact",
    sx: "span 4",
  },
  {
    id: 5,
    label: "Address 1",
    name: "address1",
    sx: "span 4",
  },
  {
    id: 6,
    label: "Address 2",
    name: "address2",
    sx: "span 4",
  },
];
