import React from "react";
import "./Collaborations.css";

const Collaborations = () => {
          return (
                    <div className="collaborations">
                              <p className="collab-text">Over 40K+ companies have collaborated with us</p>
                              <div className="logos">
                                        <a href="https://cred.club/"><img src="/svgs/cred.svg" /></a>
                                        <a href="https://www.paypal.com/"><img src="/svgs/paypal.svg" alt="" srcset="" /></a>
                                        <a href="https://www.amazon.com/"><img src="/svgs/amazon.svg" alt="" srcset="" /></a>
                                        <a href="https://www.flipkart.com/"><img src="/svgs/flipkart.svg" alt="" srcset="" /></a >
                                        <a href="https://paytm.com/"><img src="/svgs/Vector.svg" alt="" srcset="" /></a >
                              </div>
                              <h2 className="features-title">Our Features</h2>
                    </div>
          );
};

export default Collaborations;
