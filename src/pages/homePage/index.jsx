import React from "react";
import { useApi } from "../../contexts/apiContext";
import SliderTop from "../../components/slider/index";
import ProductDetails from "../../components/ProductDetails";
import ProductCarousel from "../../components/productCarrousel";

function HomePage() {
  const { productData } = useApi();

  if (!productData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SliderTop imageSrc="bg/bg-1.png" />
      <ProductDetails product={productData[1]} />
      <div>
        <SliderTop imageSrc="bg/bg-2.png" />
        <ProductDetails product={productData[0]} />
      </div>
      <div>
        <SliderTop imageSrc="bg/bg-3.png" />
        <ProductDetails product={productData[2]} />
      </div>
      <div>
        <SliderTop imageSrc="bg/bg-4.png" />
        <ProductDetails product={productData[3]} />
      </div>
      <div>
        <ProductCarousel products={productData} />
      </div>
    </>
  );
}

export default HomePage;
