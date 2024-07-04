import React, { useState, useEffect } from "react";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, cartTotal, removeFromCart, setCartItems } =
    useShoppingCart();
  const [isOpen, setIsOpen] = useState(true);

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

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);

    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );

    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity === 1) {
      handleRemoveFromCart(itemId);
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (!isNaN(quantity) && quantity >= 0) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  return (
    <>
      {isOpen && (
        <div className="cart-container">
          <header className="header">
            <h2 className="cart-title">Carrinho{"\n"}de Compras</h2>
            <button className="close-button" onClick={handleCloseCart}>
              X
            </button>
          </header>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <button
                className="close-item-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                X
              </button>
              <div className="cart-item-info">
                <img
                  className="cart-item-image"
                  src={item.images[0]}
                  alt={item.name}
                />
              </div>
              <p className="cart-item-name">{item.name}</p>
              <div className="cart-price-and-controls">
                <div className="quantity-control">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <input
                    className="quantity-input"
                    type="text"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                  <button
                    className="quantity-button"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <p className="cart-item-price">R${Number(item.price)}</p>
              </div>
            </div>
          ))}
          <footer className="footer">
            <div className="total-price">
              <span>Total:</span>
              <span>R$ {cartTotal}</span>
            </div>
            <div className="finish-sale">
              <button>Finalizar Compra</button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
