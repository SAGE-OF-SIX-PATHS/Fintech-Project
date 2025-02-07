import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
          return (
                    <div className="foot">
                              <div className="footer-container">
                                        {/* Footer Content */}
                                        <div className="footer-content">
                                                  <div className="footer-logo-section">
                                                            <div className="footer-logo">
                                                                      <img src="https://i.imgur.com/Mvf0BJ9.png" alt="FinTrack Logo" />
                                                                      <h2>FinTrack</h2>
                                                            </div>
                                                            <p className="footer-description">
                                                                      We strive to be the go-to platform for comprehensive and accessible
                                                                      financial management, helping our users achieve their goals and
                                                                      secure their futures. Through innovation and dedication, we aim to
                                                                      revolutionize the way people interact with their finances, making
                                                                      financial success attainable for all.
                                                            </p>

                                                  </div>

                                                  {/* Quick Menu */}
                                                  <div className="pageLink">
                                                            <div className="footer-links">
                                                                      <h3>Quick Menu</h3>
                                                                      <ul>
                                                                                <li>About</li>
                                                                                <li>Pricing</li>
                                                                                <li>Blog</li>
                                                                                <li>Help</li>
                                                                      </ul>
                                                            </div>

                                                            {/* Resources */}
                                                            <div className="footer-links">
                                                                      <h3>Resources</h3>
                                                                      <ul>
                                                                                <li>Community</li>
                                                                                <li>Newsletter</li>
                                                                                <li>Blog</li>
                                                                                <li>API</li>
                                                                      </ul>
                                                            </div>

                                                  </div>
                                                  {/* Social Media Icons */}
                                        </div>

                              </div>
                              <div className="footerSection2">
                                        <p className="footer-copyright">
                                                  © 2024 PennyWise All Rights Reserved
                                        </p>
                                        <div className="footer-socials">
                                                  <FaFacebookF />
                                                  <FaInstagram />
                                                  <FaTwitter />
                                        </div>
                              </div>
                    </div>

          );
};

export default Footer;