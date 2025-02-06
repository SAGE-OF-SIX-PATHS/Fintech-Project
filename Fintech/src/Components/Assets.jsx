import React from "react";
import "./Assets.css";

const InvestmentCard = () => {
          return (
                    <div className="feature-cards">
                              {/* Left Side - Assets Chart */}
                              <div className="feature-card1">
                                        <div className="chart-container">
                                                  <img src="/svgs/NewGraph.svg" alt="Investment Graph" className="chart-svg" />
                                        </div>
                              </div>

                              {/* Right Side - Investment Text */}
                              <div className="feature-card2">
                                        <h1>Enjoy risk-free <br /> investments!</h1>
                                        <p>
                                                  Our guiding principle is simple: We do what’s best for you. We prioritize your
                                                  financial well-being above all else. With our unwavering commitment to your
                                                  success, trust <span className="highlight">FinTrack</span> to be your steadfast
                                                  partner on your journey towards financial empowerment.
                                        </p>
                              </div>
                    </div>
          );
};

export default InvestmentCard;

