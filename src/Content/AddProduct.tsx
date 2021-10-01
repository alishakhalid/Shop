import React from "react";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/MyForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addProduct } from "../ProductService";
import { ProductType } from "../TypeProduct";
import { TextField } from "@material-ui/core";

// export interface FormValues {
//   id: number;
//   img: string;
//   product_name: string;
//   description: string;
//   price: string;
// }

const initialValues: ProductType = {
  img: "",
  product_name: "",
  description: "",
  id: 0,
  price: "",
};

const schema = Yup.object().shape({
  id: Yup.string()
    .min(2, "at least 2 characters")
    .max(4, "Must be 4 characters or less")
    .required("Required"),
  img: Yup.string().required("Required"),
  product_name: Yup.string()
    .min(3, "at least 3 characters")
    .required("Required"),
  description: Yup.string(),
  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Required"),
});

export default function AddProduct() {
  const handleSubmit = (values: ProductType): void => {
    addProduct(values);
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
                  {/* <label htmlFor="id">Id: </label> */}
                  <TextField
                    label="Id"
                    type="text"
                    name="id"
                    placeholder="16"
                    fullWidth
                    helperText={touched.id ? errors.id : ""}
                    error={touched.id && Boolean(errors.id)}
                  />
                  <ErrorMessage name="id">
                    {(msg) => <div className="error">{msg}</div>}
                  </ErrorMessage>
                  {/* <div className="error">{touched.id && errors.id}</div> */}
                </div>
                <div>
                  {/* <label htmlFor="img">Image-url: </label> */}
                  <TextField
                    label="Image-url"
                    type="text"
                    name="img"
                    placeholder="Muster"
                    fullWidth
                  />
                  <div className="error">
                    {errors.img && touched.img && errors.img}
                  </div>
                </div>
                <div>
                  <label htmlFor="product_name">Productname: </label>
                  <Field
                    type="text"
                    name="product_name"
                    class="form-control"
                    placeholder="GOLDEN HOUR"
                  />
                  <div className="error">
                    {errors.product_name &&
                      touched.product_name &&
                      errors.product_name}
                  </div>
                </div>
                <div>
                  <label htmlFor="description">Description: </label>
                  <Field
                    type="description"
                    name="description"
                    class="form-control"
                    placeholder="Matte Liquid Lipstick 0.10 FL. Oz. fl-oz / Matte Liquid Lipstick 3.00 ML ml"
                  />
                  <div className="error">
                    {errors.description &&
                      touched.description &&
                      errors.description}
                  </div>
                </div>
                <div>
                  <label htmlFor="price">Price: </label>
                  <Field
                    type="currency"
                    name="price"
                    class="form-control"
                    placeholder="25.00"
                  />
                  <div className="error">
                    {errors.price && touched.price && errors.price}
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
