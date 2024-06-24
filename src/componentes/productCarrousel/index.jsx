import React, { useState } from "react";
import "./style.css";

const products = [
  {
    name: "Produto 1",
    description: "Descrição do produto 1.",
    price: 199.99,
    images: [
      "https://via.placeholder.com/300x200?text=Imagem+1",
      "https://via.placeholder.com/300x200?text=Imagem+2",
    ],
  },
  {
    name: "Produto 2",
    description: "Descrição do produto 2.",
    price: 299.99,
    images: [
      "https://via.placeholder.com/300x200?text=Imagem+1",
      "https://via.placeholder.com/300x200?text=Imagem+2",
    ],
  },
  {
    name: "Produto 3",
    description: "Descrição do produto 2.",
    price: 399.99,
    images: [
      "https://via.placeholder.com/300x200?text=Imagem+1",
      "https://via.placeholder.com/300x200?text=Imagem+2",
    ],
  },
  {
    name: "Produto 4",
    description: "Descrição do produto 2.",
    price: 499.99,
    images: [
      "https://via.placeholder.com/300x200?text=Imagem+1",
      "https://via.placeholder.com/300x200?text=Imagem+2",
    ],
  },
  {
    name: "Produto 5",
    description: "Descrição do produto 2.",
    price: 599.99,
    images: [
      "https://via.placeholder.com/300x200?text=Imagem+1",
      "https://via.placeholder.com/300x200?text=Imagem+2",
    ],
  },
];

const ProductCarrousel = () => {
  return (
    <div className="row">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  const handleMouseEnter = () => {
    setCurrentImage(product.images[1]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(product.images[0]);
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid">
        <div className="product-image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a href="#" className="image">
            <img src={currentImage} alt={product.name} />
          </a>
          {/* <span className="product-discount-label"></span> */}
          <ul className="product-links">
            <li><a href="#"><i className="fa fa-search"></i></a></li>
            <li><a href="#"><i className="fa fa-heart"></i></a></li>
            <li><a href="#"><i className="fa fa-random"></i></a></li>
          </ul>
          <a href="#" className="add-to-cart">Adicionar ao carrinho</a>
        </div>
        <div className="product-content">
          <h3 className="title"><a href="#">{product.name}</a></h3>
          <div className="price">${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarrousel;
