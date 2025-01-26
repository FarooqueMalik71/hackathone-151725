"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from '../store/cartStore';
import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useCart } from "../hooks/useCart";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    console.log('Cart:', cart);
  }, [cart]);

  return (
    <div className="overflow-x-hidden">

      {/* Header Section */}
      <div className="bg-[#252B42] py-2 lg:block">
      <div className="bg-[#252B42] py-2 hidden lg:block">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-white text-sm">
          {/* Contact Information */}
          <div className="flex items-center gap-4 mb-4 lg:mb-0">
            <div className="flex items-center gap-1">
              <FiPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-1">
              <FiMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          {/* Promotion */}
          <p className="hidden md:block">
            Follow Us and get a chance to win 80% off
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <p className="hidden md:block">Follow Us:</p>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </Link>
          </div>
        </div>
      </div>
      </div>
     
      {/* Navbar Section */}
      <div className="bg-white shadow-md  border-b-2 border-[#E5E5E5] relative z-40">
        <div className="container  flex   justify-between">
          {/* Logo */}
          <div className="text-2xl ml-16  font-bold p-[25px] text-[#252B42]">Bandage</div>

          {/* Action Icons (Mobile and Desktop) */}
          <div className="flex items-center p-[25px] gap-4 lg:hidden">
            <FiSearch size={24} color="#252B42" className="cursor-pointer" />
            <Link href="/cart" className="text-sm font-medium hover:text-[#23A6F0] transition-all relative">
              <FiShoppingCart size={24} color="#252B42" className="cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {useCart().cart.length || 0}
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-[#252B42]" />
              ) : (
                <FiMenu className="text-3xl text-[#252B42]" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex mr-40 p-[33px] ">
            <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
              <li>
                <Link href="/" className="hover:text-[#23A6F0] transition-all">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="./shop"
                  className="flex items-center gap-1 hover:text-[#23A6F0] transition-all"
                >
                  Shop
                  <FiChevronDown />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#23A6F0] transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Icons for Desktop */}
          <div className="hidden md:flex items-center mr-16 gap-6 text-[#23A6F0]">
            <button className="text-sm font-medium">Login/Register</button>
            <FiSearch className="text-lg cursor-pointer" />
           
            <Link href="/cart" className="text-sm font-medium hover:text-[#23A6F0] transition-all relative">
              <FiShoppingCart size={24} color="#252B42" className="cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {useCart().cart.length || 0}
              </span>
            </Link>
            <FiHeart size={24} color="#252B42" className="cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="./shop" className="hover:text-[#23A6F0] transition-all">
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#23A6F0] transition-all"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#23A6F0] transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;