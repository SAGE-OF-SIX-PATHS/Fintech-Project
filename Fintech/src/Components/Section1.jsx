import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./Section1.css";

const data = [
          { name: "12", value: 20000 },
          { name: "14", value: 60000 },
          { name: "16", value: 80000 },
          { name: "18", value: 78650 },
          { name: "20", value: 50000 },
          { name: "22", value: 130000 },
];

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
                                        <div className="graphics-sectionOne">
                                                  {/* Visa Card */}
                                                  <div className="card visa-card">
                                                            <div className="card-header">
                                                                      <span className="visa-p">Visa</span>
                                                                      <div className="image-container"><img
                                                                                src="/images/visa.png"
                                                                                alt="Visa Logo"
                                                                                className="img"
                                                                      /></div>
                                                            </div>
                                                            <div className="onetwo">
                                                                      <div className="one">
                                                                                <p className="word">Transaction</p>
                                                                                <span className="number">73</span>
                                                                      </div>
                                                                      <div className="two">
                                                                                <p>Total Balance:</p>
                                                                                <h2>$74,330</h2>
                                                                      </div>
                                                            </div>
                                                            {/* <div className="visa2"></div>
                                                            <div className="visa3"></div> */}
                                                  </div>


                                                  {/* Rent/Mortgage Card */}
                                                  <div className="card rent-card">
                                                            <p>Rent/Mortgage</p>
                                                            <h2>15,865 $</h2>
                                                            <div className="progress-bar">
                                                                      <div className="progress"></div>
                                                            </div>
                                                  </div>
                                        </div>

                                        {/* Chart Section */}
                                        <div className="chart-container">
                                                  <div className="chart-header">
                                                            <select>
                                                                      <option>Monthly</option>
                                                                      <option>Yearly</option>
                                                            </select>
                                                            <select>
                                                                      <option>January</option>
                                                                      <option>February</option>
                                                                      <option>March</option>
                                                                      <option>April</option>
                                                                      <option>May</option>
                                                                      <option>June</option>
                                                                      <option>July</option>
                                                                      <option>August</option>
                                                                      <option>September</option>
                                                                      <option>October</option>
                                                                      <option>November</option>
                                                                      <option>December</option>
                                                            </select>
                                                  </div>
                                                  <ResponsiveContainer width="100%" height={250}>
                                                            <LineChart data={data}>
                                                                      {/* X-Axis starts from 13 and ends at 22 */}
                                                                      <XAxis dataKey="name" tick={{ fill: "#A1FF08" }} />

                                                                      {/* Y-Axis labels in 'k' format */}
                                                                      <YAxis
                                                                                tickFormatter={(value) => `${value / 1000}k`}
                                                                                tick={{ fill: "#A1FF08" }}
                                                                      />

                                                                      <Tooltip contentStyle={{ backgroundColor: "black", borderRadius: "10px", color: "white" }} />

                                                                      <Line
                                                                                type="monotone"
                                                                                dataKey="value"
                                                                                stroke="#A1FF08"
                                                                                strokeWidth={2}
                                                                                dot={{ fill: "#A1FF08", r: 6 }}
                                                                      />
                                                            </LineChart>
                                                  </ResponsiveContainer>

                                        </div>
                              </div>
                    </div>
          );
};

export default FintechUI;
