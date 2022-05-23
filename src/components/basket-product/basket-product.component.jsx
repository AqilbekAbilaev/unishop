import "./basket-product.styles.scss";

const BasketProduct = () => {
  return (
    <div className="basket-product flex">
      <div className="basket-product-details flex">
        <h3 className="basket-product-name">Lenovo</h3>
        <span className="basket-product-brand">Asus</span>
      </div>
      <div className="amount flex">
        <span className="decrement arrow">-</span>
        <span className="basket-product-amount">38 pieces</span>
        <span className="increment arrow">+</span>
      </div>
    </div>
  );
};

export default BasketProduct;
