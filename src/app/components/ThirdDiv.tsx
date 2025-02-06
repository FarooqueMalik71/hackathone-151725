
import React from 'react';
import FoureProduct from './FourProduct';




interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  discountPrice: string;
  colors: string[];
}




async function ProductCard() {





  return (
    <>
   <FoureProduct />
    
    </>
  );
}

export default ProductCard ;