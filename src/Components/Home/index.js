import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import ProductCard from "../ProductCard";
import Loader from "react-loader-spinner";
import { fetchData } from "../../Util/ServerFunctions";
import "./styles.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    try {
      setProducts(await fetchData());
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProductData();
  }, []);

  if (loading) {
    return (
      <Container>
        <Row className="vh-100 justify-content-center align-items-center">
          <Loader type="Bars" color="#00BFFF" height={100} width={100} />
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
          {products.map((product, id) => (
            <ProductCard key={id} id={id} product={product} />
          ))}
        </Row>
      </Container>
    );
  }
};

export default Home;
