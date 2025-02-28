import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
//w-[60%] mx-auto rounded-[17px] md:w-[90%] sm:w-full h-full
//<div className="w-full h-full border-b border-white pb-6 flex flex-col gap-10 md:gap-6 sm:gap-4">
const Footer = () => {
          return (
                    <footer className="bg-[#141414] text-white font-[Clash Display] p-10 w-[85%] mx-auto rounded-[17px] md:w-[90%] sm:w-full">
                              {/* Footer Container */}
                              <div className="w-full h-full border-b border-white pb-6 flex justify-start items-start gap-10 md:gap-6 sm:gap-4 sm:flex-wrap sm: flex-col">

                                        {/* Logo & Description */}
                                        <div className="flex-1 min-w-[250px]">
                                                  <div className="flex items-center gap-3">
                                                            <img src="https://i.imgur.com/Mvf0BJ9.png" alt="FinTrack Logo" className="w-12" />
                                                            <h2 className="text-2xl font-bold">FinTrack</h2>
                                                  </div>
                                                  <p className="text-sm mt-4 leading-6 opacity-80 max-w-[300px]">
                                                            We strive to be the go-to platform for comprehensive financial management, helping users
                                                            achieve their goals and secure their future.
                                                  </p>
                                        </div>

                                        {/* Quick Menu */}
                                        <div className="flex-1 min-w-[200px]">
                                                  <h3 className="text-lg font-bold mb-2">Quick Menu</h3>
                                                  <ul className="space-y-2">
                                                            <li className="text-sm cursor-pointer hover:underline">About</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Pricing</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Blog</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Help</li>
                                                  </ul>
                                        </div>

                                        {/* Resources */}
                                        <div className="flex-1 min-w-[200px]">
                                                  <h3 className="text-lg font-bold mb-2">Resources</h3>
                                                  <ul className="space-y-2">
                                                            <li className="text-sm cursor-pointer hover:underline">Community</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Newsletter</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Blog</li>
                                                            <li className="text-sm cursor-pointer hover:underline">API</li>
                                                  </ul>
                                        </div>
                              </div>

                              {/* Footer Bottom */}
                              <div className="flex justify-between items-center mt-6 text-sm opacity-80 ">
                                        <p className="whitespace-nowrap">© 2024 PennyWise. All Rights Reserved</p>
                                        <div className="flex gap-5 text-xl sm: flex-wrap">
                                                  <FaFacebookF className="cursor-pointer hover:scale-110 transition-transform" />
                                                  <FaInstagram className="cursor-pointer hover:scale-110 transition-transform small: hidden" />
                                                  <FaTwitter className="cursor-pointer hover:scale-110 transition-transform small: hidden" />
                                        </div>
                              </div>
                    </footer>
          );
};

export default Footer;
