import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-item">
        <p>Artículos en la cesta: {quantity}</p>
        <p>Total: {totalPrice}€</p>
        <button onClick={() => console.log(cart)}>Comprar</button>
      </div>
    </div>
  );
};
