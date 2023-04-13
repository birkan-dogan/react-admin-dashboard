import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import { useMediaQuery } from "@mui/material"; // for responsive design
import Header from "../../components/Header";
import userSchema, { formData } from "../../components/yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {/* Formik provides pre-made values that come from the Formik component itself --> values, errors, touched, handleBlur, handleChange, handleSubmit, */}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0, 1fr))"
              sx={{ "& > div": { gridColumn: isNonMobile ?? "span 4" } }}
            >
              {formData.map((data) => (
                <TextField
                  key={data.id}
                  fullWidth
                  variant="filled"
                  type="text"
                  label={data.label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[data.name]}
                  name={data.name}
                  error={!!touched[data.name] && !!errors[data.name]} //  !! syntax forces the variable to become a boolean
                  helperText={touched[data.name] && errors[data.name]}
                  sx={{ gridColumn: `${data.sx}` }}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
