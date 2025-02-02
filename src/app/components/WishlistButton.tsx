'use client';

import Link from 'next/link';
// import { useState } from 'react';
import { Product } from "types/productTypes";



interface WishlistButtonProps {
  product: Product;
}

export default function WishlistButton({ product }: WishlistButtonProps) {
  const handleClick = () => {
    const savedWishlist = localStorage.getItem('wishlist');
    const wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
    localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]));
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 bg-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
    >
      <Link href="/wishlist">Add to Wishlist</Link>
    </button>
  );
}