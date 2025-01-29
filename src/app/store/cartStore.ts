'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from 'types/productTypes';

interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => ({
          cart: [...state.cart, item],
        })),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
    }),
    {
      name: 'cart-storage',
    }
  )
); 