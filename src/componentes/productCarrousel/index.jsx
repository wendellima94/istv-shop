import React, { useState } from "react";
import "./style.css";
import { products } from "../../api/api";

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
        <div
          className="product-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="image">
            <img src={currentImage} alt={product.name} />
          </a>
          {/* <span className="product-discount-label"></span> */}
          <ul className="product-links">
            <li>
              <a href="#">
                <i className="fa fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-random"></i>
              </a>
            </li>
          </ul>
          <a href="#" className="add-to-cart">
            Adicionar ao carrinho
          </a>
        </div>
        <div className="product-content">
          <h3 className="title">
            <a href="#">{product.name}</a>
          </h3>
          <div className="price">${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarrousel;
