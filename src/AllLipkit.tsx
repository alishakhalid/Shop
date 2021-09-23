import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import { ProductType } from "./TypeProduct";
import Header from "./Header";
//searchcontext umbenennen
import { SearchContext } from "./Context/SeacrhContext";
import Footer from "./Footer";

function AllProductPage() {
  const [products, setProduct] = useState<ProductType[]>([]);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    fetch("http://localhost:3003/products")
      .then((resolve) => {
        return resolve.json();
      })
      .then((product) => {
        setProduct(product);
      })
      .catch(() => {
        console.log("unexpected error");
      });
  }, [products]);

  return (
    <>
      <div className="allProducts">
        <Header />
        <Container>
          <Row>
            {products
              .filter((product) => {
                return (
                  product.product_name.toLowerCase().includes(search) ||
                  !search ||
                  product.price.toLowerCase().includes(search)
                );
              })
              .map((product: ProductType) => {
                return (
                  <Col md={4}>
                    <Product
                      id={product.id}
                      img={product.img}
                      product_name={product.product_name}
                      description={product.description}
                      price={product.price}
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AllProductPage;
