import React from "react";
import "./style.css";

import MainMenu from "../../componentes/mainMenu/menu";
import SearchContainer from "../../componentes/search";
import LogoItemsContent from "../../componentes/logoItems";
import LoginItemsHeader from "../../componentes/menuUsersItems";
import SliderTop from "../../componentes/slider";
import ProductDetails from "../../componentes/ProductDetails";
import ProductCarousel from "../../componentes/productCarrousel";

export default function HomePage() {
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
      name: "Produto 5",
      description: "Descrição do produto 2.",
      price: 599.99,
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
  ];
  
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
      <div className="menuContainer">
        <header className="headerTop">
          Os melhores produtos você encontra aqui!
        </header>
        <header className="subHeaderTop">
          <section className="searchItems">
            <SearchContainer />
          </section>
          <section className="logoItems">
            <LogoItemsContent />
          </section>
          <section className="userItems">
            <LoginItemsHeader />
          </section>
        </header>
        <MainMenu />
      </div>
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
