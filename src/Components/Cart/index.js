import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { baseUrlSB, fetchData } from "../../Util/ServerFunctions";
import ProductCard from "../ProductCard";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const fetchCartData = async () => {
    try {
      setCart(await fetchData("cart"));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const updateQuantity = async (id, val) => {
    let response = await fetch(baseUrlSB + "cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, val })
    });
    let success = response.status === 200;

    console.log("->", success, response.status);
    if (success) {
      console.log("deleting");
      setCart(
        cart.map((item, ind) => {
          if (ind === id) item.quantity += val;
          return item;
        })
      );
    }
  };

  const deleteFromCart = async (id) => {
    let response = await fetch(baseUrlSB + "cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    });
    let success = response.status === 200;

    // console.log("->", success, response.status);
    if (success) {
      // console.log("deleting");
      setCart(cart.filter((item, ind) => ind !== id));
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCartData();
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
      <Container>
        <Row>
          <h2 className="mx-auto my-2">Cart..!</h2>
        </Row>
        <Row>
          <Col className="text-right" xs="12">
            <Link to="/">
              <Button color="primary">Back To Product Page</Button>
            </Link>{" "}
            <Button color="primary">Checkout</Button>
          </Col>
        </Row>
        <Row className="align-item-center">
          {cart.map((product, id) => (
            <ProductCard
              key={id}
              deleteFromCart={deleteFromCart}
              updateQuantity={updateQuantity}
              id={id}
              product={product}
            />
          ))}
        </Row>
      </Container>
    );
  }
};

export default Cart;
