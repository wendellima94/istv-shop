import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import './style.css';

const ProductCarousel = ({ products }) => {
  return (
    <Carousel interval={null} className="product-carousel">
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <Card className="product-card">
            <div className="product-card-image">
              <img
                src={product.images[0]}
                alt={product.name}
                className="card-img-top"
                onMouseEnter={(e) => e.currentTarget.src = product.images[1]}
                onMouseLeave={(e) => e.currentTarget.src = product.images[0]}
              />
            </div>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>${product.price.toFixed(2)}</strong> <br />
                ou 12x de ${(product.price / 12).toFixed(2)}
              </Card.Text>
              <Button variant="primary">Adicionar ao Carrinho</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
