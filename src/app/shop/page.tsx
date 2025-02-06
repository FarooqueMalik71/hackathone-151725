import React from 'react'
import Header from '../components/Header'

import ShopDev1 from './shopDev1';
// import ShopDev2 from './shopDev2';
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
import FoureProduct from '../components/fourProduct';

export default async function page() {
  const products = await fetchProducts({ query: allProducts });

  return (
    <>






      <GreenHeader />
      <Header />
      <div className="homepage py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8">

        <ShopDev1 />
        <FoureProduct />

        <div className="companies flex flex-wrap justify-center items-center mx-auto sm:flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 p-4">

          <Image src={logo1} alt="logo-1" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
          <Image src={logo2} alt="logo-2" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
          <Image src={logo3} alt="logo-3" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
          <Image src={logo4} alt="logo-4" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
          <Image src={logo5} alt="logo-5" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
          <Image src={logo6} alt="logo-6" className="logoimg w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
        </div>


        <h3 className="text-dark-blue text-xl md:text-2xl font-extrabold tracking-wider mt-12 text-center">
                        BESTSELLER PRODUCTS
                    </h3>
                    <p className="text-gray text-sm md:text-lg mt-2 text-center">
                        Problems trying to resolve the conflict between
                    </p>

        {/* ... company logos ... */}
        {product ? (

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 py-16 px-5 transition-all duration-300">
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
                <div className="flex justify-center item-center gap-2 mt-4 px-2 pb-4">
                                <span className="w-4 h-4 rounded-full bg-primary transition-transform transform hover:scale-105"></span>
                                <span className="w-4 h-4 rounded-full bg-[#23856d] transition-transform transform hover:scale-105"></span>
                                <span className="w-4 h-4 rounded-full bg-[#e77c40] transition-transform transform hover:scale-105"></span>
                                <span className="w-4 h-4 rounded-full bg-dark-blue transition-transform transform hover:scale-105"></span>
                            </div>
              </Link>
            ))}
          </div>









        ) : (

          <div className="flex justify-center items-center h-screen w-full">
            <BarWave />
          </div>

        )

        }



<nav aria-label="Page navigation example">
                    <div className="flex justify-center items-center">
                        <ul className="inline-flex space-x-px text-sm">
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 bg-white border  border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-400 dark:hover:text-black">Previous</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-400 dark:hover:text-black">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-400 dark:hover:text-black">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-gray-700 border border-e-0 border-gray-300 bg-blue-200 hover:bg-blue-300 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border  border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-400 dark:hover:text-black">Next</a>
                            </li>

                        </ul>
                    </div>
                </nav>





      </div >
    </>
  )

}


