'use client';

import { Product } from "types/productTypes";

export default function WishlistButton({ product }: { product: Product }) {
  const handleAddToWishlist = () => {
    // Implement your wishlist logic here
    console.log('Added to wishlist:', product);
  };

  return (
    <button
      onClick={handleAddToWishlist}
      className="bg-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
    >
      Add to Wishlist
    </button>
  );
}