import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import "./login.styles.scss";

import image from "../../assets/shopping-cart.png";

const Login = () => {
  return (
    <div className="login-container flex">
      <div className="logo-container flex">
        <img src={image} alt="shopping cart" />
      </div>

      <form action="#">
        <FormInput label='Phone number:' required type='text'/>
        <FormInput label='Password:' required type='password' />
        <Button type='submit' value='Enter' />
      </form>
    </div>
  );
};

export default Login;
