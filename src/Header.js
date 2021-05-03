import React, { Component } from "react";
import MenuBtn from "./image/menu-btn.png";
import Logo from "./image/logo.png";
import KMark from "./image/k-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
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
          <div className="search_bar_area">
            <div className="search_bar">
              <div className="search_bar_name">
                Dog
              </div>
              <div className="search_badge">
                <div className="k-mark">
                  <img src={KMark} alt=""/>
                  <div className="k-text">0.15</div>
                </div>
                <div className="rise-mark">
                  <FontAwesomeIcon className="rise-icon" icon={faArrowUp} />
                  <div className="rise-text">13%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
