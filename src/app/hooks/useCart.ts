import { useState, useEffect } from 'react';

export function useCart() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Load cart from localStorage or state management
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  return { cart };
} 