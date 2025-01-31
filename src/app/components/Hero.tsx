import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <>
      <div className="w-full bg-primary">
        <div
          className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center px-4 md:px-16"
          style={{
            backgroundImage: "url('/images/shop-hero-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Hero Text Content */}
          <div className="text-center w-full md:text-left md:max-w-lg lg:max-w-2xl px-4">
            <span className="text-white text-xs md:text-base mb-2 md:mb-4 block">SUMMER 2020</span>
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4">
              NEW COLLECTION
            </h1>
            <p className="text-white text-sm md:text-lg mb-6 md:mb-8">
              We know how large objects will act, <br className="hidden md:block" />
              but things on a small scale.
            </p>

            {/* Shop Now Button */}
            <Link href="/shop">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-8 py-2 md:py-4 rounded-md text-xs md:text-lg font-extrabold tracking-wider">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Section (Editors Pick) */}
      <div className="w-full h-auto flex flex-col items-center justify-center px-4 mb-12 md:mb-40 mt-12 md:mt-36">
        <span className="text-dark-blue text-base md:text-xl font-extrabold">EDITORS PICK</span>
        <p className="text-gray text-xs md:text-base mb-6 md:mb-10 text-center px-4">
          Problems trying to resolve the conflict between
        </p>

        {/* Product Grid */}
        <div className="w-full">
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div
              className="w-full h-[20rem] md:h-[33.4375rem] bg-cover bg-center bg-no-repeat flex items-end justify-start p-6 transition-all duration-300 hover:scale-105"
              style={{ backgroundImage: "url('./images/filter1.jpg')" }}
            >
              <button className="bg-white text-dark-blue px-8 md:px-16 py-2 rounded-sm text-sm md:text-lg font-extrabold">
                MEN
              </button>
            </div>

            {/* Column 2 */}
            <div
              className="w-full h-[20rem] md:h-[33.4375rem] bg-cover bg-center bg-no-repeat flex items-end justify-start p-6 transition-all duration-300 hover:scale-105"
              style={{ backgroundImage: "url('./images/filter2.jpg')" }}
            >
              <button className="bg-white text-dark-blue px-8 md:px-16 py-2 rounded-sm text-sm md:text-lg font-extrabold">
                WOMEN
              </button>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              {/* Row 1 */}
              <div
                className="w-full h-[9rem] md:h-[16rem] lg:h-[47%] bg-cover bg-center bg-no-repeat flex items-end justify-start p-6 transition-all duration-300 hover:scale-105"
                style={{ backgroundImage: "url('./images/filter3.jpg')" }}
              >
                <button className="bg-white text-dark-blue px-4 md:px-8 py-2 rounded-sm text-sm md:text-lg font-extrabold">
                  ACCESSORIES
                </button>
              </div>

              {/* Row 2 */}
              <div
                className="w-full h-[9rem] md:h-[16rem] lg:h-[47%] bg-cover bg-center bg-no-repeat flex items-end justify-start p-6 transition-all duration-300 hover:scale-105"
                style={{ backgroundImage: "url('./images/filter4.jpg')" }}
              >
                <button className="bg-white text-dark-blue px-8 md:px-16 py-2 rounded-sm text-sm md:text-lg font-extrabold">
                  KIDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
