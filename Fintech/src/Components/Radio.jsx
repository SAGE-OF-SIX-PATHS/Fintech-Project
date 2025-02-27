import React, { useState } from "react";
import "./Radio.css"; // Import CSS file

const RadioBox = () => {
          const [selectedOption, setSelectedOption] = useState("");

          return (
                    <div className="radio-container">
                              <label className="radio-label">
                                        <input
                                                  type="radio"
                                                  name="option"
                                                  value="option1"
                                                  checked={selectedOption === "option1"}
                                                  onChange={(e) => setSelectedOption(e.target.value)}
                                        />
                                        <span className="custom-radio"></span>
                              </label>

                              <label className="radio-label">
                                        <input
                                                  type="radio"
                                                  name="option"
                                                  value="option2"
                                                  checked={selectedOption === "option2"}
                                                  onChange={(e) => setSelectedOption(e.target.value)}
                                        />
                                        <span className="custom-radio"></span>
                              </label>
                    </div>
          );
};

export default RadioBox;
