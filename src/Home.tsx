import Header from "./Header";
import "./CSS/Home.css";
import { Card, Carousel } from "react-bootstrap";
import { fromPairs } from "lodash";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.allure.com/photos/60ef573a0f0db478fbf656f1/master/pass/kylie%20cosmetics%20lip%20kits.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Khalid's Cosmetics</h3>
            <p>Buy your favorites</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/56fd8954d210b8df71bb810f/1626544018561-NV3WA8B4T9MV04NVVBN4/new-york-beauty-photographer-los-angeles-cosmetic-photography-kylie-cosmetics-product-michelle-monique-lip-kit-liquid-lipstick.jpg?format=2500w"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>NEW COLLECTION</h3>
            <p>Don't miss out</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Card>
        <div className="card">
          <img src="" className="card-img-top" alt="lipkit" />
          <div className="card-body">
            <h5 className="card-title">ok</h5>
            <p className="card-text">test</p>
            <p>Price in $: expensive</p>
          </div>
        </div>
      </Card>
    </>
  );
}
