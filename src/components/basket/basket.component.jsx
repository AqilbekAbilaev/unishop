import { useContext } from "react";
import { Link } from "react-router-dom";

import { SellContext } from "../../contexts/sell.context";
import BasketProduct from "../basket-product/basket-product.component";
import Button from "../button/button.component";
import "./basket.styles.scss";

const Basket = () => {
  const {isBasketOpen, setIsBasketOpen} = useContext(SellContext);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  }

  return (
    <div className={isBasketOpen ? "basket-container" : "basket-container close"}>
      <div className="basket-container-head">
        <h2 className="basket-container-header">Basket</h2>
        <span className="close" onClick={toggleBasket}>&#10005;</span>
      </div>
      <div className="basket">
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
      </div>
      <Link to="pay">
        <Button value="Pay" navigate/>
      </Link>
    </div>
  );
};

export default Basket;
