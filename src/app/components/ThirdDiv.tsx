import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  discountPrice: string;
  colors: string[];
}






// Product Card Component



function ProductCard({ image, title, subtitle, price, discountPrice, colors }: ProductCardProps) {
  return (
    <div className="w-[90%] sm:w-[45%] md:w-60 h-[30rem] md:h-[45rem] flex flex-col items-center justify-between shadow-lg rounded-lg overflow-hidden bg-white">
      <div
        className="w-full h-[70%] bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex flex-col items-center justify-center p-4">
        <h4 className="text-base md:text-lg font-extrabold mb-2">{title}</h4>
        <h6 className="text-xs md:text-sm text-gray mb-2">{subtitle}</h6>
        <p className="text-xs md:text-sm text-gray mb-2">
          ${price} <span className="text-secondary">${discountPrice}</span>
        </p>

        {/* Color Dots */}
        <div className="flex justify-around gap-2 mt-4">
          {colors.map((color: any, index: React.Key | null | undefined) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full ${color}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThirdDiv() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto pt-5 px-4">
      {/* Section Heading */}
      <span className="text-gray text-sm md:text-lg">Featured Products</span>
      <h3 className="text-dark-blue text-xl md:text-2xl font-extrabold tracking-wider mt-2 text-center">
        BESTSELLER PRODUCTS
      </h3>
      <p className="text-gray text-sm md:text-lg mt-2 text-center">
        Problems trying to resolve the conflict between
      </p>

      {/* Cards Container */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-8 px-2 md:px-10 transition-all duration-300 hover:scale-105">
        {/* Card 1 */}
        <ProductCard
          image="./images/product1.jpg"
          title="Graphic Design"
          subtitle="English Department"
          price="16.48"
          discountPrice="6.48"
          colors={["bg-primary", "bg-[#23856d]", "bg-[#e77c40]", "bg-dark-blue"]}
        />
        
        {/* Card 2 */}
        <ProductCard
          image="./images/product2.jpg"
          title="Graphic Design"
          subtitle="English Department"
          price="16.48"
          discountPrice="6.48"
          colors={["bg-primary", "bg-[#23856d]", "bg-[#e77c40]", "bg-dark-blue"]}
        />
        
     
      </div>
    </div>
  );
}

export default ThirdDiv;
