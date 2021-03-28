import {
  Row,
  Button,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText} from "reactstrap";


const ProductCard = () => {
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
              <Row className="align-items-center justify-content-around">
              <Button color="primary">Add to Cart</Button><Button color="danger">View Description</Button>
            </Row>
            </CardBody>
          </Card>
        </Col>
)
}

export default ProductCard;