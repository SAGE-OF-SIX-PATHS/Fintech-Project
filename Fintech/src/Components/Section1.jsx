import React from "react";

const FintechUI = () => {
          return (
                    <div className="flex flex-wrap justify-between items-center bg-black text-white p-12 pt-0 box-border min-h-screen font-['Inter',_sans-serif] overflow-hidden">
                              <div className="w-full lg:w-5/12 mt-16 mb-8 lg:mb-0">
                                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 font-['Garet',_sans-serif]">
                                                  Manage your finances at your fingertips
                                        </h1>
                                        <p className="font-['Clash_Display',_sans-serif] font-light text-lg sm:text-xl lg:text-2xl leading-relaxed text-white text-left mt-4">
                                                  FinTrack offers the convenience of managing your finances effortlessly, all from the
                                                  convenience of your fingertips. Whether it's tracking expenses, monitoring investments, or
                                                  planning budgets, our intuitive platform empowers you to take control of your financial
                                                  journey with ease.
                                        </p>
                                        <p className="font-['Clash_Display',_sans-serif] font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed mt-4">
                                                  Sign up now and start your journey to financial freedom.
                                        </p>
                                        <div className="flex flex-col sm:flex-row mt-5">
                                                  <button className="w-full sm:w-[280px] md:w-[300px] bg-[#F0FF9D] text-black py-3 px-6 rounded-full text-base font-semibold font-['Clash_Display',_sans-serif] cursor-pointer transition-all duration-300 ease-in-out mb-4 sm:mb-0 sm:mr-4">
                                                            Sign Up for Free
                                                  </button>
                                                  <button className="w-full sm:w-[280px] md:w-[300px] bg-transparent border-2 border-white py-3 px-6 rounded-full text-base font-semibold font-['Clash_Display',_sans-serif] cursor-pointer transition-all duration-300 ease-in-out">
                                                            Watch Video
                                                  </button>
                                        </div>
                              </div>

                              <div className="w-full lg:w-6/12 flex flex-col items-center justify-center">
                                        {/* Cards Section */}
                                        <div className="flex justify-around w-full mb-8">
                                                  <div className="relative -bottom-4 sm:-bottom-8 md:-bottom-16 lg:-bottom-22">
                                                            <img src="/svgs/visa.svg" alt="Visa card" className="w-full max-w-xs" />
                                                  </div>
                                                  <div className="flex flex-col justify-center">
                                                            <img src="/svgs/number.svg" alt="Number" className="mb-4 w-full max-w-[200px]" />
                                                            <img src="/svgs/checkbox.svg" alt="Checkbox" className="w-full max-w-[200px]" />
                                                  </div>
                                        </div>

                                        {/* Chart Section */}
                                        <div className="w-full flex justify-center">
                                                  <img src="/svgs/chartOne.svg" alt="Chart" className="w-full max-w-lg" />
                                        </div>
                              </div>
                    </div>
          );
};

export default FintechUI;