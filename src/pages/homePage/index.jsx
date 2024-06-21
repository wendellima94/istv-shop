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
      name: "Produto 3",
      description: "Descrição do produto 3.",
      price: 399.99,
      images: [
        "https://via.placeholder.com/300x200?text=Imagem+3",
        "https://via.placeholder.com/300x200?text=Imagem+4",
      ],
    },
    {
      name: "Produto 4",
      description: "Descrição do produto 4.",
      price: 499.99,
      images: [
        "https://via.placeholder.com/300x200?text=Imagem+5",
        "https://via.placeholder.com/300x200?text=Imagem+6",
      ],
    },
    {
      name: "Produto 5",
      description: "Descrição do produto 5.",
      price: 599.99,
      images: [
        "https://via.placeholder.com/300x200?text=Imagem+7",
        "https://via.placeholder.com/300x200?text=Imagem+8",
      ],
    },
    {
      name: "Produto 6",
      description: "Descrição do produto 6.",
      price: 699.99,
      images: [
        "https://via.placeholder.com/300x200?text=Imagem+9",
        "https://via.placeholder.com/300x200?text=Imagem+10",
      ],
    },
    {
      name: "Produto 7",
      description: "Descrição do produto 7.",
      price: 799.99,
      images: [
        "https://via.placeholder.com/300x200?text=Imagem+11",
        "https://via.placeholder.com/300x200?text=Imagem+12",
      ],
    },
    {
      name: "Produto 8",
      description: "Descrição do produto 8.",
      price: 899.99,
      images: [
        "https://via.placeholder.com/300x200?text=Imagem+13",
        "https://via.placeholder.com/300x200?text=Imagem+14",
      ],
    },
    {
      name: "Produto 9",
      description: "Descrição do produto 9.",
      price: 999.99,
      images: [
        "https://via.placeholder.com/300x200?text=Imagem+15",
        "https://via.placeholder.com/300x200?text=Imagem+16",
      ],
    },
    {
      name: "Produto 10",
      description: "Descrição do produto 10.",
      price: 1099.99,
      images: [
        "https://via.placeholder.com/300x200?text=Imagem+17",
        "https://via.placeholder.com/300x200?text=Imagem+18",
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
        <ProductCarousel products={products} />
      </div>
    </>
  );
}
