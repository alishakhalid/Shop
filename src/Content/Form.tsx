import React from "react";
import { Form, Field, Formik, FormikHelpers } from "formik";
import "../CSS/Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import * as yup from "yup";
// import { useForm } from "react-yup";
// import { yupResolver } from "@hookform/resolvers/yup";

interface MyFormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const validation = yup.object().shape({
  firstname: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  lastname: yup
    .string()
    .max(25, "Must be 25 characters or less")
    .required("Required"),
  email: yup.string().email("Email is invalid").required("Required"),
  password: yup.string().min(8, "Must be 8 characters").required("Required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
export default function Registrate() {
  return (
    <>
      <div className="body">
        <Header />
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          }}
          onSubmit={(
            values: MyFormValues,
            { setSubmitting }: FormikHelpers<MyFormValues>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={validation}
        >
          {({ values, errors, touched }) => (
            <Form>
              <fieldset className="fieldset">
                <div>
                  <label htmlFor={values.firstname}>Firstname: </label>
                  <Field
                    className="field"
                    type="text"
                    name="firstname"
                    placeholder="Max"
                    class="form-control"
                    value={values.firstname}
                  />
                </div>
                <div>
                  <label htmlFor={values.lastname}>Lastname: </label>
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="Muster"
                    class="form-control"
                    value={values.lastname}
                  />
                </div>
                <div>
                  <label htmlFor={values.email}>Email: </label>
                  <Field
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="maxmuster@gmail.com"
                    value={values.email}
                  />
                </div>
                <div>
                  <label htmlFor={values.password}>Password: </label>
                  <Field
                    type="password"
                    name="password"
                    class="form-control"
                    value={values.password}
                  />
                </div>
                <button className="button" type="submit">
                  Submit
                </button>
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
