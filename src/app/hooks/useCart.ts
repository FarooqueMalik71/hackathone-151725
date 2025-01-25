import { useState, useEffect } from 'react';

export function useCart() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Load cart from localStorage or state management
    const savedCart = localStorage.getItem('cart');
    console.log('Saved cart from localStorage:', savedCart);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      console.log('Cart state after setting:', JSON.parse(savedCart));
    }
  }, []);

  return { cart };
}