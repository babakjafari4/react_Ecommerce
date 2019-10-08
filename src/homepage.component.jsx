import React from "react";
import "./homepage.style.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">کلاه ها</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">کت ها</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">کتانی ها</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">زنانه</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">مردانه</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
