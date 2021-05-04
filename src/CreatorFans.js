import React, { Component } from "react";
import CreatorImg from "./image/creator-icon.png";
import FanImg from "./image/fan-icon.png";
class CreatorFans extends Component {
  render() {
    return (
      <div className="creator_fans">
        <div className="creator_fans_top">
          <div className="arrow_down"></div>
          <div className="container">
            <div className="item_creator">
              <div className="img_creator">
                <img src={CreatorImg} alt="" />
              </div>
              <div className="text_creator">
                <div className="text_header">how to</div>
                <div className="text_content">become a creator</div>
              </div>
            </div>
            <div className="item_fan">
              <div className="img_fan">
                <img src={FanImg} alt="" />
              </div>
              <div className="text_fan">
                <div className="text_header">how to</div>
                <div className="text_content">become a creator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreatorFans;
