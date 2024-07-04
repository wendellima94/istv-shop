import React, { useState, useEffect } from "react";
import { products as allProducts } from "../../api/api";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useShoppingCart();

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  return (
    <div style={{ padding: "80px 10px" }}>
      {products.map((product, index) => (
        <div style={{ borderBottom: "1px solid black", marginBottom: "20px" }} key={index}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          {product.images && product.images.length > 0 && (
            <img
              style={{ width: "100px" }}
              src={product.images[0]}
              alt={product.name}
            />
          )}
          <button onClick={() => addToCart(product)}>
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}
