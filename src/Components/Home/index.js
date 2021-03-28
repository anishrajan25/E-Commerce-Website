import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import ProductCard from "../ProductCard";
import Loader from "react-loader-spinner";
import "./styles.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const fetchProductData = async () => {
    const data = await fetch("https://i8u9f.sse.codesandbox.io/");
    console.log(await data.json());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchProductData();
  }, []);

  if (loading) {
    return (
      <Container>
        <Row className="vh-100 justify-content-center align-items-center">
          <Loader
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
            styles={{ margin: "auto auto" }}
          />
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="my-3">
        <Row>
          <Col className="text-right" xs="12">
            <Link to="/cart">
              <Button color="primary">Go To Cart..!</Button>
            </Link>
          </Col>
        </Row>
        <Row className="align-item-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </Container>
    );
  }
};

export default Home;
