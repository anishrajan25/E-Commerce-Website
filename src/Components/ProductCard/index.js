import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Button,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const ProductCard = ({ quantity }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Col md="4" className="my-3">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://reactstrap.github.io/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Classic Hoodie</CardTitle>
          <CardText>Price: 5000</CardText>
          {quantity ? (
            <CardText>
              Quantity: {quantity} <Button color="info"> - </Button>{" "}
              <Button color="info">+</Button>
            </CardText>
          ) : null}
          <Row className="align-items-center justify-content-around">
            {quantity ? (
              <Button color="primary">Delete</Button>
            ) : (
              <Link to="/cart">
                <Button color="primary">Add to Cart</Button>
              </Link>
            )}
            <Button color="danger" onClick={toggle}>
              View Description
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Product Description</ModalHeader>
              <ModalBody>
                <CardImg
                  top
                  width="100%"
                  src="https://reactstrap.github.io/assets/318x180.svg"
                  alt="Card image cap"
                />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Add to Cart..!
                </Button>
              </ModalFooter>
            </Modal>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;
