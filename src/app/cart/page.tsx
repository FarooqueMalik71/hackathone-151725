'use client';

import { useEffect, useState } from "react";
import { Product } from "types/productTypes";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/action";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "../components/Header";

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const cartItems = getCartItems();
    setCart(cartItems);
  }, []);

  const handleRemoveFromCart = (productId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to remove this item from your cart',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Remove'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        removeFromCart(productId);
        setCart(getCartItems());
        Swal.fire({
          title: 'Removed',
          text: 'Item removed from cart',
          icon: 'success'
        });
      }
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    updateCartQuantity(productId, quantity);
    setCart(getCartItems());
  };

  const handleIncreaseQuantity = (productId: string) => {
    const product = cart.find(item => item._id === productId);
    if (product) {
      handleUpdateCartQuantity(productId, product.inventory + 1);
    }
  };

  const handleDecreaseQuantity = (productId: string) => {
    const product = cart.find(item => item._id === productId);
    if (product && product.inventory > 1) {
      handleUpdateCartQuantity(productId, product.inventory - 1);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: 'Processing your order',
      text: 'Please wait while we process your order',
      icon: 'info',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Proceed'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Order placed',
          text: 'Your order has been placed successfully',
          icon: 'success'
        });
        setCart([]);
      }
    });
  };

  return (
    <div className="w-full">
      <div className="container mx-auto p-4">
        <Header/>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item._id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  {item.productImage && (
                    <Image src={urlFor(item.productImage).url()}
                      alt="product image" width={500} height={500} className=" w-16 h-16 object-cover rounded" />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecreaseQuantity(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.inventory}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold">Total: ${calculateTotalPrice().toFixed(2)}</h2>
              <button
                onClick={handleProceed}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;