import React, { Component } from "react";
import CreatorImg from "./image/creator-icon.png";
import FanImg from "./image/fan-icon.png";
import BookImg from "./image/content-icon.png";
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
                <div className="text_title">how to</div>
                <div className="text_content">Become a Creator</div>
              </div>
            </div>
            <div className="item_fan">
              <div className="img_fan">
                <img src={FanImg} alt="" />
              </div>
              <div className="text_fan">
                <div className="text_title">how to</div>
                <div className="text_content">Become a Creator</div>
              </div>
            </div>
          </div>
        </div>
        <div className="creator_fans_content">
          <div className="container">
            <div className="img_book">
              <img src={BookImg} alt="" />
            </div>
            <div className="text-header">
              <div className="text-title">Becoming a Creator on GoKnack</div>
              <div className="text-content">
                As a creator, wouldn’t it be great to share your work across
                different platforms and earn passive income as a fan admires and
                engages with your work?! Well now you can, let’s compare! Use
                our share widget and receive a minimum $.06 per engagement.
                Share on Facebook, Twitter and any other social media platform!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreatorFans;
