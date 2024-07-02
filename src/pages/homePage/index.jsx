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
      "products/Colágeno.png",
      "products/Emagrecedor.png",
      "products/Estimulante.png",
      "products/Melatonina.png",
      "products/Multi.png",
    ],
  };

  return (
    <>
      <SliderTop imageSrc="bg/bg-1.png" />
      <ProductDetails product={product} />
      <div>
        <SliderTop imageSrc="bg/bg-2.png" />
        <ProductDetails product={product} />
      </div>
      <div>
        <SliderTop imageSrc="bg/bg-3.png" />
        <ProductDetails product={product} />
      </div>
      <div>
        <SliderTop imageSrc="bg/bg-4.png" />
        <ProductDetails product={product} />
      </div>
      <div>
        <ProductCarousel products={products} />
      </div>
    </>
  );
}
