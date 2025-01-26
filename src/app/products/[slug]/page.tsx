'use client'
import { fetchProducts } from '@/sanity/lib/fetch';
import { allProducts } from '@/sanity/lib/queries';
import type { Product } from 'types/productTypes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import WishlistButton from '@/app/components/WishlistButton';
import { urlFor } from '@/sanity/lib/image';


import AddToCartButton from '@/app/components/AddtoCartButton';
import Header from '@/app/components/Header';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';


export default function ProductPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  console.log('Slug:', params.slug);

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductBySlug(params.slug);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [params.slug]);

  const handleShopRedirect = () => {
    router.push('/shop');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {product ? (
        <>
          <div className="container mx-auto p-4">
            <Header />
          </div>
          <div className="flex justify-center mb-4 mt-4 mr-10">
            <Link href="/shop" className="text-blue-600 hover:text-blue-800 font-medium mr-auto">
              Shop / Add to Cart
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96">
              <Image
                src={urlFor(product.productImage).url()}
                alt={product.title || 'Product image'}
                width={500}
                height={500}
                className="object-cover object-contain rounded-lg w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold">${product.price}</span>
                {product.discountPercentage > 0 && (
                  <span className="text-red-500 line-through">
                    ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-yellow-500">{product.rating} ★</span>
                <span className="text-gray-500">
                  ({product.discountPercentage}% off)
                </span>
              </div>

              <p className="text-gray-700">{product.description}</p>

              <div className="flex gap-4">




                <AddToCartButton product={product} />

                <WishlistButton product={product} />
                <button onClick={handleShopRedirect} className="btn btn-primary"><FiShoppingCart size={24} color="#252B42" className="cursor-pointer" /></button>
              </div>

              <div className="mt-8 space-y-2">
                <p><span className="font-semibold">Category:</span> {product.category}</p>
                <p><span className="font-semibold">Brand:</span> {product.brand}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-xl text-red-500">Product not found</p>
      )}
    </div>
  );
}

async function getProductBySlug(slug: string): Promise<Product> {
  const products = await fetchProducts({ query: allProducts });
  return products.find((p: Product) => p.slug.current === slug) || null;
}
