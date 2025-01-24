'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from 'types/productTypes';

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== productId),
        })),
    }),
    {
      name: 'cart-storage',
    }
  )
); 