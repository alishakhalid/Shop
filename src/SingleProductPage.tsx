import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/SinglePage.css";
import { ProductType } from "./TypeProduct";
import Header from "./Header";
import Footer from "./Footer";

export const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType>({} as ProductType);

  useEffect(() => {
    fetch("http://localhost:3003/products/" + id)
      .then((resolve) => {
        return resolve.json();
      })
      .then((res) => {
        setProduct(res);
      })
      .catch(() => {
        console.log("unexpected error");
      });
  }, [id]);

  return (
    <>
      <Header />
      <Card>
        <div className="Singlecard">
          <img src={product.img} className="singleImg" alt="lipkit" />
          <div className="card-body">
            <h5 className="card-title">{product.product_name}</h5>
            <p className="card-text">Description: {product.description}</p>
            <p>Price: {product.price}</p>
          </div>
          <a href={"http://localhost:3000/product"} className="button">
            <Button>Go back</Button>
          </a>
        </div>
      </Card>
      <Footer />
    </>
  );
};
export default SingleProductPage;
