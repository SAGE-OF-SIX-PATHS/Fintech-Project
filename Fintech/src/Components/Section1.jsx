import React from "react";
import "./Section1.css";

const FintechUI = () => {
          return (
                    <div className="fintech-container">
                              <div className="text-section">
                                        <h1>Manage your finances at your fingertips</h1>
                                        <p>
                                                  FinTrack offers the convenience of managing your finances effortlessly, all from the
                                                  convenience of your fingertips. Whether it's tracking expenses, monitoring investments, or
                                                  planning budgets, our intuitive platform empowers you to take control of your financial
                                                  journey with ease.
                                        </p>
                                        <p className="bold-text">Sign up now and start your journey to financial freedom.</p>
                                        <div className="buttons">
                                                  <button className="signup">Sign Up for Free</button>
                                                  <button className="watch">Watch Video</button>
                                        </div>
                              </div>

                              <div className="graphics-section">
                                        {/* Cards Section */}

                                        <div className="visaSection">
                                                  <div className="visa-card">
                                                            <img src="/svgs/visa.svg" alt="" srcset="" />
                                                  </div>
                                                  <div className="svgContainer">
                                                            <img className="svgOne" src="/svgs/number.svg" alt="" srcset="" />
                                                            <img className="svgTwo" src="/svgs/checkbox.svg" alt="" srcset="" />
                                                  </div>
                                        </div>

                                        {/* Chart Section */}
                                        <div className="chart">
                                                  <img src="/svgs/chartOne.svg" alt="" srcset="" />
                                        </div>
                              </div>
                    </div>
          );
};

export default FintechUI;
