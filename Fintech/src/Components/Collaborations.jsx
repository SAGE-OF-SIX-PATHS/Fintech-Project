import React from "react";
import { FaPaypal, FaAmazon } from "react-icons/fa";
import { SiFlipkart, SiPaytm } from "react-icons/si";
import { TbShieldCheck } from "react-icons/tb";
import "./Collaborations.css";

const Collaborations = () => {
          return (
                    <div className="collaborations">
                              <p className="collab-text">Over 40K+ companies have collaborated with us</p>
                              <div className="logos">
                                        <a href="https://cred.club/"><TbShieldCheck className="logo" /></a>
                                        <a href="https://www.paypal.com/"><FaPaypal className="logo" /></a>
                                        <a href="https://www.amazon.com/"><FaAmazon className="logo" /></a>
                                        <a href="https://www.flipkart.com/"><SiFlipkart className="logo" /></a >
                                        <a href="https://paytm.com/"><SiPaytm className="logo" /></a >
                              </div>
                              <h2 className="features-title">Our Features</h2>
                    </div>
          );
};

export default Collaborations;
