import React, { Component } from "react";
import MenuBtn from './image/menu-btn.png'
import Logo from './image/logo.png'
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <img className="menu-btn" src={MenuBtn} alt="" width="74" height="48" />
          <img className="logo" src={Logo} alt="" width="139" height="28" />
        </div>
      </div>
    );
  }
}

export default Header;
