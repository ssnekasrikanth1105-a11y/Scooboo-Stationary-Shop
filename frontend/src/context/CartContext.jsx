// src/context/CartContext.jsx

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {

  const existing = cartItems.find(
    (item) => item.id === product.id
  );

  if (existing) {

    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    alert(`${product.name} quantity updated in cart ✅`);

  } else {

    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);

    alert(`${product.name} added to cart 🛒`);
  }
};
const removeFromCart = (id) => {

  const product = cartItems.find(
    (item) => item.id === id
  );

  setCartItems(
    cartItems.filter(
      (item) => item.id !== id
    )
  );

  alert(`${product.name} removed from cart ❌`);
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};