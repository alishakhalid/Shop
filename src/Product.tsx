import React from "react";
import "./App.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductType } from "./TypeProduct";

export const Product = ({
  id,
  img,
  product_name,
  description,
  price,
}: ProductType) => {
  return (
    <Card>
      <div className="card">
        <img src={img} className="card-img-top" alt="lipkit" />
        <div className="card-body">
          <h5 className="card-title">{product_name}</h5>
          <p className="card-text">{description}</p>
          <p>Price: {price}</p>
        </div>
        <a href={"http://localhost:3000/product/" + id} className="button">
          <Button>View</Button>{" "}
        </a>
      </div>
    </Card>
  );
};

export default Product;
