import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";

class SignInAndSignUpPage extends React.Component {
  state = {};
  render() {
    return (
      <div style={{ direction: "rtl" }} className="sign-in-and-sign-up">
        ورود
        <SignIn />
      </div>
    );
  }
}

export default SignInAndSignUpPage;
