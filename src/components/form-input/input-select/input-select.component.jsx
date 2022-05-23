import { useState } from "react";

import FormInput from "../form-input.component";

import "./input-select.styles.scss";
import addUser from "../../../assets/add-user.png";
import selectUser from "../../../assets/search.png";

const InputSelect = () => {
  const [isSelect, setIsSelect] = useState(true);
  const toggle = () => setIsSelect(!isSelect);

  return (
    <div className="input-select-container">
      {isSelect ? (
        <>
          <select className="input select">
            <option selected></option>
            <option>Bazarbay</option>
            <option>Orazbay</option>
            <option>Sardarbay</option>
            <option>Jamshidbay</option>
            <option>Toqtasin</option>
            <option>Toqtamasin</option>
          </select>
          <img src={addUser} alt="add user icon" onClick={toggle} />
        </>
      ) : (
        <>
          <FormInput label="Customer" type="text"/>
          <img src={selectUser} alt="select user" onClick={toggle} />
        </>
      )}
    </div>
  );
};

export default InputSelect;
