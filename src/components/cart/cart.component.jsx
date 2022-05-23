import { useContext } from "react";

import { SellContext } from "../../contexts/sell.context";
import icon from "../../assets/unishop.svg";

import "./cart.styles.scss";

const Cart = () => {
  const {isBasketOpen, setIsBasketOpen} = useContext(SellContext);
  console.log(isBasketOpen)
  const toggleCart = () => {
    setIsBasketOpen(!isBasketOpen);
  }
  return (
    <div className="cart-container" onClick={toggleCart}>
      <img src={icon} alt="shopping cart" />
    </div>
  );
};

export default Cart;
