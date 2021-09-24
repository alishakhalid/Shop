import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import { ProductType } from "./TypeProduct";
import Header from "./Header";
//searchcontext umbenennen
import { SearchContext } from "./Context/SeacrhContext";
import { getAllProducts } from "./ProductService";

function AllProductPage() {
  const [products, setProduct] = useState<ProductType[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    getAllProducts().then((resolve) => {
      setProduct(resolve.data);
      setisLoading(false);
    });
  }, []);

  return (
    <>
      <div className="allProducts">
        <Header />
        <Container>
          <Row>
            {isLoading && <h1>Page is loading...</h1>}
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
