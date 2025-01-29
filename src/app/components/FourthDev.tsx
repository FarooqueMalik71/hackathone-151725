import React from "react";
import personimg from "../images/shop-hero.png";
import Image from "next/image";
import SecPersonimg from "../images/asian-woman-man.png";
import { IoIosArrowForward } from "react-icons/io";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

function Button({ text, icon, className }: ButtonProps) {
  return (
    <button className={`text-white bg-secondary px-4 py-3 rounded-md flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wider ${className}`}>
      {text} {icon && <IoIosArrowForward />}
    </button>
  );
}

function FourthDev() {
  return (
    <div>
      {/* Fourth Section */}
      <div className="w-full h-auto md:h-screen bg-[#23856d] flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10">
        {/* Fourth Text */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pl-8">
          <span className="text-white text-sm mb-4 block">SUMMER 2020</span>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Vita Classic Product
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6">
            We know how large objects will act, We know how objects will act,
            We know.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <button className="text-white text-xl sm:text-2xl md:text-3xl font-black">
              $16.48
            </button>
            <Button text="ADD TO CART" className="flex items-center gap-2" icon={undefined} />
          </div>
        </div>

        {/* Fourth Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-none md:h-[98vh] object-cover"
            src={personimg}
            alt="Vita Classic Product"
          />
        </div>
      </div>

      {/* Fifth Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 mb-20">
        {/* Fifth Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] object-cover"
            src={SecPersonimg}
            alt="Neural Universe Products"
          />
        </div>

        {/* Fifth Text */}
        <div className="w-full md:w-1/2 md:pl-8">
          <span className="text-gray text-sm mb-4 block">SUMMER 2020</span>
          <h1 className="text-dark-blue text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Part of the Neural Universe
          </h1>
          <p className="text-gray text-base sm:text-lg md:text-xl mb-6">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Button text="BUY NOW" className="bg-secondary" icon={undefined} />
            <Button text="READ MORE" className="text-secondary border-2 border-secondary" icon={undefined} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthDev;
