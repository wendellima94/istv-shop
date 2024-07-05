import React, { useState, useEffect } from "react";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import LoginItemsHeader from "../menuUsersItems";
import CartItem from "./cartItem";
import "./ShoppingCart.css";
import FinishSaleButton from "../finishButton/finishButton";

const ShoppingCart = () => {
  const { cartItems, cartTotal, removeFromCart, setCartItems } =
    useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadCartItemsFromLocalStorage = () => {
      const savedCartItems = localStorage.getItem("cartItems");
      if (savedCartItems) {
        const parsedCartItems = JSON.parse(savedCartItems);
        setCartItems(parsedCartItems);
      }
    };

    loadCartItemsFromLocalStorage();
  }, [setCartItems]);

  const handleCloseCart = () => setIsOpen(false);
  const handleOpenCart = () => setIsOpen(true);

  return (
    <>
      <LoginItemsHeader onOpenCart={handleOpenCart} />
      {isOpen && (
        <div className="cart-container">
          <header className="header">
            <h2 className="cart-title">Carrinho</h2>
            <button className="close-button" onClick={handleCloseCart}>
              X
            </button>
          </header>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              setCartItems={setCartItems}
            />
          ))}
          <footer className="footer">
            <div className="total-price">
              <span>Subtotal:</span>
              <span>R$ {cartTotal}</span>
            </div>
            <FinishSaleButton />
          </footer>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
