import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShopDev1 from './shopDev1';
import ShopDev2 from './shopDev2';
// images
import Image from "next/image";
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'

import { fetchProducts } from '@/sanity/lib/fetch';
import {  allProducts } from '@/sanity/lib/queries';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { Product } from 'types/productTypes';


export default async function page() {
  const products = await fetchProducts({ query: allProducts});

  return (
    <div className="homepage py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8">
      <Header />
      <ShopDev1 />
      <ShopDev2 />
      <div className="companies flex flex-wrap justify-center items-center mx-auto sm:flex-col md:flex-row gap-2">
    <Image src={logo1} alt="logo-1" className="logoimg w-full sm:w-1/2 md:w-auto h-50 object-contain" />
    <Image src={logo2} alt="logo-2" className="logoimg w-full sm:w-1/2 md:w-auto h-50 object-contain" />
    <Image src={logo3} alt="logo-3" className="logoimg w-full sm:w-1/2 md:w-auto h-50 object-contain" />
    <Image src={logo4} alt="logo-4" className="logoimg w-full sm:w-1/2 md:w-auto h-50 object-contain" />
    <Image src={logo5} alt="logo-5" className="logoimg w-full sm:w-1/2 md:w-auto h-50 object-contain" />
    <Image src={logo6} alt="logo-6" className="logoimg w-full sm:w-1/2 md:w-auto h-50 object-contain" />
</div>

       {/* ... company logos ... */}
       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
        {products.map((product: Product) => (
          <Link 
            key={product._id} 
            href={`/products/${product.slug.current}`}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image 
              src={urlFor(product.productImage).url()} 
              alt={product.title}
              width={400}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              {/* ... rest of product card content ... */}
            </div>
          </Link>
        ))}
      </div>


      <Footer />
    </div >
  )
}
