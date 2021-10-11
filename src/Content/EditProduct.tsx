import React from "react";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/MyForm.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { updateProductById } from "../ProductService";
import { ProductType } from "../TypeProduct";
import { useParams } from "react-router";

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

export default function EditProduct() {
  const { id } = useParams<{ id: string }>();
  const handleSubmit = (values: ProductType): void => {
    updateProductById(values, id);
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
                  <h1>Edit </h1>
                  <hr></hr>
                </div>

                <div>
                  <label htmlFor="id">Id: </label>
                  <Field
                    type="text"
                    name="id"
                    data-cy="id"
                    placeholder="16"
                    class="form-control"
                  />
                  <div className="error">{touched.id && errors.id}</div>
                </div>
                <div>
                  <label htmlFor="img">Image-url: </label>
                  <Field
                    type="text"
                    name="img"
                    data-cy="img"
                    placeholder="Muster"
                    class="form-control"
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
                    data-cy="product_name"
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
                    data-cy="description"
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
                    data-cy="price"
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
                  data-cy="submitButton"
                  disabled={isSubmitting}
                >
                  Update
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
