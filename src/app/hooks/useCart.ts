// This hook is used to manage the shopping cart state
// It loads cart data from localStorage and provides access to the cart state
// This is used across components that need to display or modify cart contents
import { useState, useEffect } from 'react';

export function useCart() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Load cart from localStorage when component mounts
    const savedCart = localStorage.getItem('cart');
    console.log('Saved cart from localStorage:', savedCart);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      console.log('Cart state after setting:', JSON.parse(savedCart));
    }
  }, []);

  return { cart };
}