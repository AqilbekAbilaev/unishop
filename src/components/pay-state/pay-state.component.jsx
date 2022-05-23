import "./pay-state.styles.scss";

import profit from "../../assets/profits.png";
import loss from "../../assets/losses.png";

const images = {
  profit,
  loss,
};

const PayState = ({ className }) => {
  return (
    <div className={"paystate-container " + className}>
      <div className="icon-container">
        <img className="paystate-icon" src={images[className]} alt={className + " icon"}/>
      </div>
      <span>To'lov: 20 000 UZS</span>
    </div>
  );
};

export default PayState;
