import React, { useState } from 'react';

const Navbar = () => {
          const [isMenuOpen, setIsMenuOpen] = useState(false);

          return (
                    <nav className="flex flex-col lg:flex-row justify-between items-center bg-black text-white py-2 px-4 sm:px-6 lg:px-12 w-full h-auto lg:h-[140px] z-[1000] overflow-x-hidden font-['Lucida_Sans',_sans-serif]">
                              <div className="flex items-center justify-center lg:justify-start gap-4 font-bold text-2xl mb-2.5 lg:mb-0">
                                        <div>
                                                  <img
                                                            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                                                            src="svgs/Logo.svg"
                                                            alt="FinTrack Logo"
                                                  />
                                        </div>
                                        <span className="font-['Garet',_sans-serif] text-3xl sm:text-4xl">FinTrack</span>
                              </div>

                              {/* Mobile menu button */}
                              <button
                                        className="lg:hidden absolute right-5 top-7 text-3xl"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                              >
                                        ☰
                              </button>

                              {/* Navigation links */}
                              <ul className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-3 lg:gap-12 list-none text-center w-full lg:w-auto transition-all duration-300 ease-in-out`}>
                                        <li><a href="#about" className="text-xl sm:text-2xl font-['DM_Sans',_sans-serif] no-underline text-white hover:text-gray-300 transition-colors duration-300">About</a></li>
                                        <li><a href="#features" className="text-xl sm:text-2xl font-['DM_Sans',_sans-serif] no-underline text-white hover:text-gray-300 transition-colors duration-300">Features</a></li>
                                        <li><a href="#pricing" className="text-xl sm:text-2xl font-['DM_Sans',_sans-serif] no-underline text-white hover:text-gray-300 transition-colors duration-300">Pricing</a></li>
                                        <li><a href="#blog" className="text-xl sm:text-2xl font-['DM_Sans',_sans-serif] no-underline text-white hover:text-gray-300 transition-colors duration-300">Blog</a></li>
                              </ul>

                              {/* Sign in button */}
                              <button className="bg-white text-black rounded-full py-2.5 px-5 text-base sm:text-lg h-10 sm:h-[50px] w-full lg:w-[150px] border-none cursor-pointer hover:bg-gray-100 active:cursor-grabbing mt-2.5 lg:mt-0 transition-colors duration-300">
                                        Sign In
                              </button>
                    </nav>
          );
};

export default Navbar;