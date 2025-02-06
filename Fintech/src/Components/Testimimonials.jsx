import React from "react";
import "./Testimonials.css";

const testimonials = [
          {
                    text: "FinTrack revolutionized how I manage my finances, making it effortless to track expenses and plan budgets.",
                    author: "Sarah Jhon",
          },
          {
                    text: "Finally, a finance tool that simplifies everything! FinTrack is intuitive, comprehensive, and user-friendly.",
                    author: "Michael Randolph",
          },
          {
                    text: "With FinTrack, I feel more in control of my money than ever before. It’s like having a personal finance assistant in my pocket.",
                    author: "Emily Ken",
          },
          {
                    text: "I’ve tried many finance apps, but FinTrack stands out for its reliability and ease of use. Highly recommended!",
                    author: "Alex Holt",
          },
          {
                    text: "As a busy professional, FinTrack is a lifesaver. It keeps me organized and on top of my finances effortlessly.",
                    author: "David Luther",
          },
          {
                    text: "FinTrack has helped me achieve my financial goals faster by providing valuable insights and tools. Truly indispensable!",
                    author: "Jessica Mary",
          },
];

const Testimonials = () => {
          return (
                    <div className="testimonials-container">
                              <h1 className="testimonials-title">What our users say</h1>
                              <div className="testimonials-grid">
                                        {testimonials.map((testimonial, index) => (
                                                  <div key={index} className="testimonial-card">
                                                            <p className="testimonial-text">"{testimonial.text}"</p>
                                                            <div className="testimonial-footer">
                                                                      <p className="testimonial-author">- {testimonial.author}</p>
                                                                      <span className="testimonial-quote">”</span>
                                                            </div>
                                                  </div>
                                        ))}
                              </div>
                              {/* Call to Action */}
                              <div className="cta-section">
                                        <h1 className="cta-title">Join the trust of 150k+ users, <br />Sign up today</h1>
                                        <button className="cta-button">Get Started</button>
                              </div>
                    </div>
          );
};

export default Testimonials;
