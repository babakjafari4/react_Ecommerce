import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          فروشگاه
        </Link>
        <Link className="option" to="/contact">
          ارتباط با ما
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            خروج
          </div>
        ) : (
          <Link className="option" to="/signin">
            ورود
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
