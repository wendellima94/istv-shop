import React from "react";
import "./style.css";

import SliderTop from "../../componentes/slider";
import ProductDetails from "../../componentes/ProductDetails";
import ProductCarousel from "../../componentes/productCarrousel";
import { products } from "../../api/api";

export default function HomePage() {
  const product = {
    name: "Nome do Produto",
    description: "Descrição detalhada do produto.",
    price: 199.99,
    images: [
      "https://via.placeholder.com/400x400?text=Imagem+1",
      "https://via.placeholder.com/400x400?text=Imagem+2",
      "https://via.placeholder.com/400x400?text=Imagem+3",
      "https://via.placeholder.com/400x400?text=Imagem+4",
      "https://via.placeholder.com/400x400?text=Imagem+5",
    ],
  };

  return (
    <>
      <SliderTop />
      <ProductDetails product={product} />
      <div>
        <SliderTop />
        <ProductDetails product={product} />
      </div>
      <div>
        <SliderTop />
        <ProductDetails product={product} />
      </div>
      <div>
        <SliderTop />
        <ProductDetails product={product} />
      </div>
      <div>
        <ProductCarousel products={products} />
      </div>
    </>
  );
}
