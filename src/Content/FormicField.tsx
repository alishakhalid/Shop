import { TextField } from "@material-ui/core";
import { ErrorMessage, Field } from "formik";
import React from "react";
import "../CSS/FormicField.css";
//reusable form, to use in future again, thats why I need props

interface FormicProps {
  label: string;
  img: string;
}

const FormikField: React.FC<FormicProps> = ({ label, img }) => {
  return (
    <div className="FormikField">
      <Field
        as={TextField}
        label={label}
        img={img}
        helperText={<ErrorMessage name={img} />}
      />
      {/* <TextField label={label} /> */}
    </div>
  );
};
export default FormikField;
