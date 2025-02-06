import React from "react";
import "./InvestmentCard.css";

const Investment = () => {
          return (
                    <div className="investment-container">
                              {/* Left Side - Assets Chart */}
                              <div className="investment-card">
                                        <div className="chart-container">
                                                  <img src="/svgs/NewGraph.svg" alt="Investment Graph" className="chart-svg" />
                                        </div>
                              </div>

                              {/* Right Side - Investment Text */}
                              <div className="investment-text">
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

export default Investment;
