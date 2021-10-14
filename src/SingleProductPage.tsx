import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/SinglePage.css";
import { ProductType } from "./TypeProduct";
import Header from "./Header";
import Footer from "./Footer";
import { deleteProductById, getSingleProducts } from "./ProductService";
import EditProduct from "./Content/EditProduct";

export const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType>({} as ProductType);

  useEffect(() => {
    getSingleProducts(id).then((res) => setProduct(res.data));
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
            <p>Price in $: {product.price}</p>
          </div>
          <Row>
            <Col md={4}>
              <a href={"http://localhost:3000/lipkit"} className="button">
                <Button>Go back</Button>
              </a>
            </Col>
            <Col md={4}>
              <a href={"http://localhost:3000/edit"} className="button">
                <Button>Edit</Button>
              </a>
            </Col>
            <Col md={4}>
              <Button
                href={"http://localhost:3000/lipkit"}
                onClick={() => deleteProductById(id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
      <Footer />
    </>
  );
};
export default SingleProductPage;
