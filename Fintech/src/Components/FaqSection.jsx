import React, { useState } from "react";
import "./FaqSection.css";

const faqs = [
          {
                    question: "How secure is my financial data on FinTrack?",
                    answer:
                              "Your financial data's security is paramount at FinTrack. We employ advanced encryption protocols and stringent security measures to safeguard your information. Rest assured, your data is protected with the highest levels of security.",
          },
          {
                    question: "Can I link multiple bank accounts and cards to my account?",
                    answer: "",
          },
          {
                    question: "Is FinTrack accessible on mobile devices?",
                    answer: "",
          },
          {
                    question: "Does FinTrack offer support for investment management?",
                    answer: "",
          },
];

const FAQSection = () => {
          const [openIndex, setOpenIndex] = useState(0);

          const toggleFAQ = (index) => {
                    setOpenIndex(openIndex === index ? null : index);
          };

          return (
                    <div className="faq-container">
                              <div className="faq-content">
                                        <h1 className="faq-title">FAQ’s</h1>
                                        <div className="faq-list">
                                                  {faqs.map((faq, index) => (
                                                            <div
                                                                      key={index}
                                                                      className={`faq-item ${openIndex === index ? "open" : ""}`}
                                                                      onClick={() => toggleFAQ(index)}
                                                            >
                                                                      <div className="faq-question">
                                                                                {faq.question}
                                                                                <span className="faq-icon">{openIndex === index ? "▲" : "▼"}</span>
                                                                      </div>
                                                                      {openIndex === index && faq.answer && (
                                                                                <p className="faq-answer">{faq.answer}</p>
                                                                      )}
                                                                      <hr className="faq-divider" />
                                                            </div>
                                                  ))}
                                        </div>
                              </div>

                              {/* Right Side - FAQ Image */}
                              <div className="faq-image-container">
                                        <img src="/svgs/Rectangle.svg" alt="FAQ" className="faq-image" />
                              </div>
                    </div>
          );
};

export default FAQSection;
