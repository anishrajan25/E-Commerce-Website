import { Button, Col, Container, Row } from "reactstrap";
import ProductCard from "../ProductCard";

const Cart = () => {
  return (
    <Container>
      <Row>
        <h2 className="mx-auto my-2">Cart..!</h2>
      </Row>
      <Row>
        <Col className="text-right" xs="12">
          <Button color="primary">Back To Product Page</Button>{" "}
          <Button color="primary">Checkout</Button>
        </Col>
      </Row>
      <Row className="align-item-center">
        <ProductCard quantity={1} />
        <ProductCard quantity={1} />
        <ProductCard quantity={1} />
        <ProductCard quantity={1} />
      </Row>
    </Container>
  );
};

export default Cart;
