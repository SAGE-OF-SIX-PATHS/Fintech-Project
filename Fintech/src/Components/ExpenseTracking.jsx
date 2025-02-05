//run this command in termnal first: npm install recharts
import React from "react";
import "./ExpenseTracking.css";

const ExpenseTracking = () => {
          return (
                    <div className="expense-container">
                              {/* Left Side - Text */}
                              <div className="expense-text">
                                        <h2>Investment-Like Expense Tracking</h2>
                                        <p>
                                                  Easily monitor your spending habits with detailed categorization and
                                                  analysis, empowering you to make informed financial decisions and stay
                                                  within your budget.
                                        </p>
                              </div>

                              {/* Right Side - Chart */}
                              <div className="ChartContainer">
                                        <img src="/svgs/Chart.svg" alt="" srcset="" />
                              </div>
                    </div>
          );
};

export default ExpenseTracking;
