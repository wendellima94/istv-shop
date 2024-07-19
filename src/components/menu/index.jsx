import React, { useState, useEffect } from "react";
import MainMenu from "../mainMenu/menu";
import LogoItemsContent from "../logoItems";
import SearchContainer from "../search";
import Sidebar from "../mobileMenu/index";
import "./style.css";
import ShoppingCart from "../shoppingCart/shoppingCart";

export default function Menu() {
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 500;

      if (scrollY > threshold && !isMenuFixed) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsMenuFixed(true);
          setIsTransitioning(false);
        }, 700);
      } else if (scrollY <= threshold && isMenuFixed) {
        setIsMenuFixed(false);
        setIsTransitioning(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuFixed]);

  return (
    <>
      <div
        className={`menuContainer ${isMenuFixed ? "fixedMenu" : ""} ${
          isTransitioning ? "menuContainerTransition" : ""
        }`}
      >
        <header className="headerTop">
          <div className="scroller">
            <span>Os melhores produtos você encontra aqui!</span>
            <span>Promoções incríveis!</span>
            <span>Novidades toda semana!</span>
          </div>
        </header>

        <header className="subHeaderTop">
          <section className="searchItems">
            <SearchContainer />
          </section>
          <section className="logoItems">
            <LogoItemsContent />
          </section>
          <section className="userItems">
            <ShoppingCart />
          </section>
        </header>
        <MainMenu />
      </div>
      <div className="contentMobilleMenu">
        <div className="mobileMenu">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />

          <section className="searchItems">
            <ShoppingCart />
          </section>
        </div>
      </div>
      <div className="contentPlaceholder"></div>
    </>
  );
}
