import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./style.css";

const ProductCarousel = ({ products, addToCart }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product._id} md={4} className="mb-3">
          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img
                src={`http://localhost:3003/img/files/${product.file[0]}`}
                alt={product.name}
              />
              <h3 className="glassBox__title">{product.name}</h3>
            </div>
            <div className="glassBox__content">
              ${product.price.toFixed(2)}
              <Button
                variant="primary"
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCarousel;
