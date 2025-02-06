'use client';

import { useEffect, useState } from "react";
import { Product } from "types/productTypes";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/action";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "../components/Header";
import { FiHeart, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const cartItems = getCartItems();
    setCart(cartItems);
    const appliedDiscount = localStorage.getItem('appliedDiscount');
    if (appliedDiscount) setDiscount(Number(appliedDiscount));
  }, []);

  const refreshCart = () => {
    setCart(getCartItems());
  };

  const handleIncreaseQuantity = (_id: string) => {
    const updatedCart = cart.map(item => {
      if (item._id === _id) {
        return { ...item, inventory: item.inventory + 1 };
      }
      return item;
    });
    updateCartQuantity(_id, 1);
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (_id: string) => {
    const updatedCart = cart.map(item => {
      if (item._id === _id && item.inventory > 1) {
        return { ...item, inventory: item.inventory - 1 };
      }
      return item;
    });
    updateCartQuantity(_id, -1);
    setCart(updatedCart);
  };

  const handleRemoveFromCart = (_id: string) => {
    removeFromCart(_id);
    setCart(prevCart => prevCart.filter(item => item._id !== _id));
  };

  const handleProceed = () => {
    if (cart.length === 0) {
      Swal.fire("Cart is Empty", "Add items before proceeding", "warning");
    } else {
      router.push("/checkout");
    }
  };

  const subTotal = cart.reduce((t, i) => t + i.price * i.inventory, 0);
  const total = subTotal - discount;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
            {cart.length === 0 ? (
              <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                <FiHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/shop" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item._id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-shrink-0">
                        {item.productImage && (
                          <Image
                            src={urlFor(item.productImage).url()}
                            alt={item.title}
                            width={160}
                            height={160}
                            className="w-40 h-40 object-contain rounded-lg"
                          />
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                          <button 
                            onClick={() => handleRemoveFromCart(item._id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-lg font-medium text-blue-600 mt-2">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <button onClick={() => handleDecreaseQuantity(item._id)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                            <FiMinus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.inventory}</span>
                          <button onClick={() => handleIncreaseQuantity(item._id)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                            <FiPlus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl p-6 shadow-sm h-fit sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cart.length} items)</span>
                  <span className="font-medium">${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">-${discount.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 mt-4 flex justify-between items-center">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-xl text-blue-600">${total.toFixed(2)}</span>
                </div>
                <button onClick={handleProceed} className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
