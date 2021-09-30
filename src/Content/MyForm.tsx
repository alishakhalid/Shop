import React from "react";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/MyForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const lowerCase = new RegExp("(?=.*[a-z])");
const upperCase = new RegExp("(?=.*[A-Z])");
const numeric = new RegExp("(?=.*[0-9])");
const specialChar = new RegExp("(?=.*[!@#$%^&*])");

const schema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "at least 3 characters")
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  lastname: Yup.string()
    .min(3, "at least 3 characters")
    .max(25, "Must be 25 characters or less")
    .required("Required"),
  email: Yup.string().email("Email is invalid").required("Required"),
  password: Yup.string()
    .min(8, "Must be 8 characters")
    .matches(lowerCase, "must contain a lowercased letter")
    .matches(upperCase, "must contain a uppercased letter")
    .matches(numeric, "must contain at least one number")
    .matches(specialChar, "must contain a special character")
    .required("Required"),
});

export default function MyForm() {
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };
  return (
    <>
      <Header />
      <div className="form">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ errors, touched, isSubmitting }) => {
            return (
              <Form>
                <div className="title">
                  <h1>Sign up </h1>
                  <hr></hr>
                </div>

                <div>
                  <label htmlFor="firstname">Firstname:</label>
                  <Field
                    type="text"
                    name="firstname"
                    placeholder="Max"
                    class="form-control"
                  />
                  <div className="error">
                    {touched.firstname && errors.firstname}
                  </div>
                </div>
                <div>
                  <label htmlFor="lastname">Lastname: </label>
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="Muster"
                    class="form-control"
                  />
                  <div className="error">
                    {errors.lastname && touched.lastname && errors.lastname}
                  </div>
                </div>
                <div>
                  <label htmlFor="email">Email: </label>
                  <Field
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="maxmuster@gmail.com"
                  />
                  <div className="error">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <div>
                  <label htmlFor="password">Password: </label>
                  <Field
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="********"
                  />
                  <div className="error">
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>
                <button
                  type="submit"
                  className="button"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
