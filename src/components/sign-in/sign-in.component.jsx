import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-botton/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";
class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.prevenetDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div style={{ direction: "rtl" }} className="sign-in">
        <h2>قبلا عضو سایت می باشم.</h2>
        <span>با ایمیل و پسورد وارد شوید</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="emailId"
            name="email"
            value={email}
            type="email"
            formInputOnChange={this.handleChange}
            required
            label="ایمیل"
          />
          <FormInput
            id="passwordId"
            name="password"
            value={password}
            type="password"
            formInputOnChange={this.handleChange}
            required
            label="پسورد"
          />
          <div className="buttons">
            <CustomButton type="submit">ورود</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGooleSignIn>
              گوگل
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
