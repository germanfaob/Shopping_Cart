import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#242424",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <div className="nav-logo">
      <Link to={"/"} style={navStyles}>
        <h2>Store</h2>
      </Link>
      </div>
      <div className="nav-cart">
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
          Revisar la cesta: <span className="cart-count"> {quantity}</span>
          </li>
        </Link>
      </ul>
      </div>
    </nav>
  );
};
