import FormInput from "../../components/form-input/form-input.component";
import Modal from "../../components/modal/modal.component";
import Product from "../../components/product/product.component";
import Cart from "../../components/cart/cart.component";
import Basket from "../../components/basket/basket.component";

import "./sell.styles.scss";

const Sell = () => {

  return (
    <div className="sell-container">
      <div className="search-bar-container">
        <FormInput
          type="search"
          label="Search for product"
          name="search for product"
          icon={true}
        />
      </div>

      <div className="results-container">
        <Product isInBasket={true}/>
        <Modal />
      </div>

      <Cart />
      <Basket />
      
    </div>
  );
};

export default Sell;
