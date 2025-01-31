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
import { allProducts } from '@/sanity/lib/queries';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { Product } from 'types/productTypes';

import GreenHeader from '../components/green-header';
import { BarWave } from 'react-cssfx-loading';
import { product } from '@/sanity/schemaTypes/product';

export default async function page() {
  const products = await fetchProducts({ query: allProducts });

  return (
    <div>
      {product ? (



        <>
          <GreenHeader />
          <Header />
          <div className="homepage py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8">

            <ShopDev1 />
            <ShopDev2 />

            <div className="companies flex flex-wrap justify-center items-center mx-auto sm:flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 p-4">

              <Image src={logo1} alt="logo-1" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
              <Image src={logo2} alt="logo-2" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
              <Image src={logo3} alt="logo-3" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
              <Image src={logo4} alt="logo-4" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
              <Image src={logo5} alt="logo-5" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
              <Image src={logo6} alt="logo-6" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* ... company logos ... */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 py-16 px-5 transition-all duration-300">
              {products.map((product: Product) => (
                <Link
                  key={product._id}
                  href={`/products/${product.slug.current}`}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    width={400}
                    height={500}
                    className="object-cover w-full h-64 transition-transform transform hover:scale-105"
                  />
                  <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h2>
                    {/* ... rest of product card content ... */}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-lg text-gray-700 font-semibold px-4">${product.price}</div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-yellow-500 font-bold px-4">
                      {product.rating}
                      <span className="ml-1">★★★☆☆ </span>
                      <span className="text-gray-600 ml-2">{product.discountPercentage}5% off</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-sm text-gray-500 font-medium px-4">{product.tags.join(', ')}</div>
                  </div>
                </Link>
              ))}
            </div>



          </div >

        </>



      ) : (

        <div className="flex justify-center items-center h-screen w-full">
          <BarWave />
        </div>

      )

      }








    </div>

  )

}


