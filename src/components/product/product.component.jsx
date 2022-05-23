import { useContext } from "react";
import { SellContext } from "../../contexts/sell.context";

import "./product.styles.scss";

const Product = ({ isInBasket = false }) => {
  const {isModalOpen, setIsModalOpen} = useContext(SellContext);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div className="product">
      <h3 className="product-name">Lenovo</h3>
      <span className="product-brand">Asus</span>
      <span className="product-price">4 400 400 UZS</span>
      <span className="product-amount">23 pieces</span>

      {isInBasket && (
        <span className="add-to-cart" title="Add to Cart" onClick={toggleModal}>
          +
        </span>
      )}
    </div>
  );
};

export default Product;
