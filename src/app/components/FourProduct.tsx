import { urlFor } from '@/sanity/lib/image';
import { product } from '@/sanity/schemaTypes/product';
import Link from 'next/link';
import React from 'react';
import { BarWave } from 'react-cssfx-loading';
import { Product } from 'types/productTypes';
import Image from "next/image";
import { fetchProducts } from '@/sanity/lib/fetch';
import { fourProductQuery } from '@/sanity/lib/queries';

async function FourProduct() {
    const products = await fetchProducts({ query: fourProductQuery });

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


            {/* ... company logos ... */}
            {product ? (

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 py-16 px-5 transition-all duration-300"

                >
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

        </div>
    );
}

export default FourProduct;
