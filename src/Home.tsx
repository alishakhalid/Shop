import Header from "./Header";
import "./CSS/Home.css";
import { Carousel } from "react-bootstrap";
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
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/56fd8954d210b8df71bb810f/1626544018561-NV3WA8B4T9MV04NVVBN4/new-york-beauty-photographer-los-angeles-cosmetic-photography-kylie-cosmetics-product-michelle-monique-lip-kit-liquid-lipstick.jpg?format=2500w"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
