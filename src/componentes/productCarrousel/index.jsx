import React, { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import './style.css';

const ProductCarousel = ({ products }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const itemsPerPage = 4;
  const groupedProducts = [];

  for (let i = 0; i < products.length; i += itemsPerPage) {
    groupedProducts.push(products.slice(i, i + itemsPerPage));
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="product-carousel">
      {groupedProducts.map((group, idx) => (
        <Carousel.Item key={idx}>
          <div className="d-flex justify-content-center">
            {group.map((product, index) => (
              <Card className="product-card" key={index}>
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
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
