
import React from 'react';

import FourProduct from './FourProduct';




interface Product {
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
   <FourProduct />
    
    </>
  );
}

export default ProductCard ;