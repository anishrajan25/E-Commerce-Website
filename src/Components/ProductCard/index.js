import { useState } from "react";
import { useHistory } from "react-router-dom";
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
import { baseUrlSB } from "../../Util/ServerFunctions";

const ProductCard = ({ product, id, deleteFromCart, updateQuantity }) => {
  const [modal, setModal] = useState(false);
  const history = useHistory();

  const addToCart = async (id) => {
    let response = await fetch(baseUrlSB + "cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    });
    let success = response.status === 200;
    // console.log("->", success, response.status);
    if (success) {
      history.push("/cart");
    }
  };

  const toggle = () => setModal(!modal);

  return (
    <Col md="3" className="my-3">
      <Card>
        <CardImg top width="100%" src={product.image} alt={product.name} />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>Price: {product.price}</CardText>
          {product.quantity ? (
            <CardText>
              Quantity: {product.quantity}{" "}
              <Button color="info" onClick={() => updateQuantity(id, -1)}>
                {" "}
                -{" "}
              </Button>{" "}
              <Button color="info" onClick={() => updateQuantity(id, 1)}>
                +
              </Button>
            </CardText>
          ) : null}
          <Row className="align-items-center justify-content-around">
            {product.quantity ? (
              <Button color="primary" onClick={() => deleteFromCart(id)}>
                Delete
              </Button>
            ) : (
              <Button color="primary" onClick={() => addToCart(id)}>
                Add to Cart
              </Button>
            )}
            <Button color="danger" onClick={toggle}>
              View Desc
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
                {product.quantity ? (
                  <Button
                    color="primary"
                    onMouseDown={() => deleteFromCart(id)}
                    onMouseUp={toggle}
                  >
                    Delete
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    onMouseDown={() => addToCart(id)}
                    onMouseUp={toggle}
                  >
                    Add to Cart
                  </Button>
                )}
              </ModalFooter>
            </Modal>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;
