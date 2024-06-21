import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import "./style.css";

const ProductDetails = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const installmentPrice = (product.price / 12).toFixed(2);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => parseInt(prevQuantity) + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? parseInt(prevQuantity) - 1 : 1));
  };

  return (
    <Container className="product-details">
      <Row>
        <Col md={6} className="product-images">
          <Row>
            <Col xs={2} className="thumbnails-column">
              <div className="image-slider">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`thumbnail ${
                      selectedImage === image ? "active" : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </Col>
            <Col xs={10} className="main-image-column">
              <div className="main-image">
                <img src={selectedImage} alt="Product" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price.toFixed(2)}</h3>
          <p className="installments">ou 12x de ${installmentPrice}</p>
          <InputGroup className="quantity-input">
            <Button variant="outline-secondary" onClick={decrementQuantity}>-</Button>
            <Form.Control
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="quantity-input-field"
            />
            <Button variant="outline-secondary" onClick={incrementQuantity}>+</Button>
          </InputGroup>
          <Button className="btn-addCart" variant="primary">
            Adicionar ao Carrinho
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
