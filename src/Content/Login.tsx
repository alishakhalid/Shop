import React, { useState } from "react";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/MyForm.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const lowerCase = new RegExp("(?=.*[a-z])");
const upperCase = new RegExp("(?=.*[A-Z])");
const numeric = new RegExp("(?=.*[0-9])");
const specialChar = new RegExp("(?=.*[!@#$%^&*])");

const schema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Required"),
  password: Yup.string()
    .min(8, "Must be 8 characters")
    .matches(lowerCase, "must contain a lowercased letter")
    .matches(upperCase, "must contain a uppercased letter")
    .matches(numeric, "must contain at least one number")
    .matches(specialChar, "must contain a special character")
    .required("Required"),
});

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
                <div>
                  <label htmlFor="email">Email: </label>
                  <Field
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="ethangray@gmail.com"
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
                  Log in
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
