"use client";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
// import BlackHeader from "./black-header";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  // Calculate total quantity of items in cart
  const totalItems = cart?.reduce((total, item) => total + (item.quantity || 1), 0) || 0;

  // Debugging: Log the cart state
  console.log("Cart state:", cart, "Cart type:", typeof cart, "Is Array:", Array.isArray(cart));

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="overflow-x-hidden">
      {/* Top Header Section */}
    

      {/* Main Navigation */}
      <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 text-sm font-medium text-[#737373]">
              <li>
                <Link href="/" className="hover:text-[#23A6F0] transition">
                  Home
                </Link>
              </li>
              <li className="group relative">
                <Link href="/shop" className="flex items-center gap-1 hover:text-[#23A6F0] transition">
                  Shop
                  <FiChevronDown />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#23A6F0] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#23A6F0] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#23A6F0] transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pages" className="hover:text-[#23A6F0] transition">
                  Pages
                </Link>
              </li>
            </ul>

            {/* Desktop Actions */}
            <div className="flex items-center gap-4 text-[#23A6F0]">
              <button className="text-sm font-medium">Login/Register</button>
              <FiSearch size={20} className="cursor-pointer text-[#252B42]" onClick={() => alert('Search functionality not implemented yet')} />
              <Link href="/cart" className="relative">
                <FiShoppingCart size={24} className="cursor-pointer text-[#252B42]" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link href="/wishlist" className="relative">
              <FiHeart size={24} className="cursor-pointer text-[#252B42]" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <FiSearch size={20} className="cursor-pointer text-[#252B42]" onClick={() => alert('Search functionality not implemented yet')} />
            <Link href="/wishlist" className="relative">
              <FiHeart size={24} className="cursor-pointer text-[#252B42]" />
              </Link>
            <Link href="/cart" className="relative">
              <FiShoppingCart size={24} className="cursor-pointer text-[#252B42]" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-100 transition">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out">
            <ul className="flex flex-col text-center gap-4 p-4 text-[#737373]">
              <li>
                <Link href="/" className="hover:text-[#23A6F0] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#23A6F0] transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#23A6F0] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#23A6F0] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#23A6F0] transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pages" className="hover:text-[#23A6F0] transition">
                  Pages
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;