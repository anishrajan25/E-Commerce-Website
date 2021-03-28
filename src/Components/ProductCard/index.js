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

const ProductCard = ({ product }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Col md="4" className="my-3">
      <Card>
        <CardImg top width="100%" src={product.image} alt={product.name} />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>Price: {product.price}</CardText>
          {product.quantity ? (
            <CardText>
              Quantity: {product.quantity} <Button color="info"> - </Button>{" "}
              <Button color="info">+</Button>
            </CardText>
          ) : null}
          <Row className="align-items-center justify-content-around">
            {product.quantity ? (
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
                  src={product.image}
                  alt={product.name}
                />
                {product.description}
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
