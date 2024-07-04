import React, { useState, useEffect } from "react";
import MainMenu from "../mainMenu/menu";
import LoginItemsHeader from "../menuUsersItems";
import LogoItemsContent from "../logoItems";
import SearchContainer from "../search";
import Sidebar from "../mobileMenu/index";
import "./style.css";

export default function Menu() {
  const [isMenuFixed, setIsMenuFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 500;

      if (scrollY > threshold) {
        setIsMenuFixed(true);
      } else {
        setIsMenuFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`menuContainer ${isMenuFixed ? "fixedMenu" : ""}`}>
        <header className="headerTop">
          <div className="scroller">
            <a>Os melhores produtos você encontra aqui!</a>
            <a>Promoções incríveis!</a>
            <a>Novidades toda semana!</a>
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
            <LoginItemsHeader />
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
            <LoginItemsHeader />
          </section>
        </div>
      </div>
      <div className="contentPlaceholder"></div>
    </>
  );
}
