import { useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SellContext } from "../../contexts/sell.context";

import "./modal.styles.scss";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(SellContext);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={isModalOpen ? "modal open" : "modal"}>
      <span className="modal-close" onClick={toggleModal}>
        &#10005;
      </span>
      <FormInput type="number" autocomplete="false" label="Number" name="number" />
      <FormInput type="number" label="Price" name="price" />

      <Button value="Add" />
    </div>
  );
};

export default Modal;
