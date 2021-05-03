import React, { Component } from "react";
import MenuBtn from "./image/menu-btn.png";
import Logo from "./image/logo.png";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="menu-btn">
            <img src={MenuBtn} alt="" />
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="search_bar">
              
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
