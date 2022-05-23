import "./form-input.styles.scss";
import image from "../../assets/search-icon.png";

const FormInput = ({ label, icon = false, ...inputProps }) => {
  const checkForNumbers = (e) => {
    let regex = /\d+/g;
    if (!e.target.value.match(regex)) {
      e.target.value = ""
    }
  }

  return (
    <div className="form-input-container">
      <input className="input" placeholder=" " {...inputProps} onChange={inputProps.value === "number" ? checkForNumbers() : null} />
      <label className="label"> {label} </label>
      {icon && <img className="search-icon" src={image} alt="search icon" />}
    </div>
  );
};

export default FormInput;
