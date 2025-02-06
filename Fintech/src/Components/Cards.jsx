import React from "react";
import "./Cards.css";

const FeatureCards = () => {
          return (
                    <div className="feature-cards">
                              <div className="feature-card1">
                                        <h2>Customizable<br />Budgeting Tools</h2>
                                        <p>
                                                  Tailor your budget to your unique financial goals with customizable
                                                  categories, spending limits, and alerts, ensuring that you stay on
                                                  track and achieve your desired outcomes.
                                        </p>
                              </div>
                              <div className="feature-card2">
                                        <h2>Investment Portfolio<br />Management</h2>
                                        <p>
                                                  Take charge of your investments with our portfolio tracker, giving
                                                  real-time updates, and personalized insights to optimize your
                                                  strategy and maximize returns.
                                        </p>
                              </div>
                    </div>
          );
};

export default FeatureCards;
