import React from "react";

const CartItem = ({ item, removeFromCart, setCartItems }) => {
  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleDecreaseQuantity = () => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
          : cartItem
      )
    );

    if (item.quantity === 1) {
      handleRemoveFromCart();
    }
  };

  const handleIncreaseQuantity = () => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    if (!isNaN(quantity) && quantity >= 0) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: quantity } : cartItem
        )
      );
    }
  };

  return (
    <div className="cart-item">
      <button className="close-item-button" onClick={handleRemoveFromCart}>
        X
      </button>
      <div className="cart-item-info">
        <img className="cart-item-image" src={item.images[0]} alt={item.name} />
      </div>
      <p className="cart-item-name">{item.name}</p>
      <div className="cart-price-and-controls">
        <div className="quantity-control">
          <button className="quantity-button" onClick={handleDecreaseQuantity}>
            -
          </button>
          <input
            className="quantity-input"
            type="text"
            value={item.quantity}
            onChange={handleQuantityChange}
          />
          <button className="quantity-button" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <p className="cart-item-price">R${Number(item.price)}</p>
      </div>
    </div>
  );
};

export default CartItem;
