import React, { Component } from "react";
import CreatorImg from "./image/creator-icon.png";
import FanImg from "./image/fan-icon.png";
import BookImg from "./image/book-icon.png";
import AmazonGrayImg from "./image/amazon-gray.png";
import SpotifyGrayImg from "./image/spotify-gray.png";
class CreatorFans extends Component {
  render() {
    return (
      <div className="creator-fans">
        <div className="creator-fans-top">
          <div className="arrow-down"></div>
          <div className="container">
            <div className="item-creator">
              <div className="img-creator">
                <img src={CreatorImg} alt="" />
              </div>
              <div className="text-creator">
                <div className="text-title">how to</div>
                <div className="text-content">Become a Creator</div>
              </div>
            </div>
            <div className="item-fan">
              <div className="img-fan">
                <img src={FanImg} alt="" />
              </div>
              <div className="text-fan">
                <div className="text-title">steps to</div>
                <div className="text-content">Become a Creator</div>
              </div>
            </div>
          </div>
        </div>
        <div className="creator-fans-content">
          <div className="container">
            <div className="img-book">
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
            <div className="pricing-cardlist">
              <div className="pricing-card">
                <div className="social-icon">
                  <img src={AmazonGrayImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-card">
                <div className="social-icon">
                  <img src={SpotifyGrayImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-card">
                <div className="social-icon">
                  <img src={AmazonGrayImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-card">
                <div className="social-icon">
                  <img src={AmazonGrayImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-card">
                <div className="social-icon">
                  <img src={AmazonGrayImg} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <div className="card-content-header-text">Starting @</div>
                    <div className="card-content-price-text">$29</div>
                    <div className="card-content-fee-text">(Upfront fee)</div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-text">
                      Earn $.01 per play/ stream
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreatorFans;
