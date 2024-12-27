import Link from "next/link";
import React from "react";
import {
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";


const Footer = () => {
  return (
    <footer className=" text-gray-700">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        {/* Logo and Social Icons */}
        <div className="flex bg-gray-50 mx-[0.25rem] m-8 border-b-2 justify-between">
            <h2 className="text-2xl font-bold text-gray-900 m-7 p-7 underline border-spacing-1">Bandage</h2>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 m-7 p-7">
              <p className="hidden md:block">Follow Us:</p>
              <Link className="text-red-700"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </Link>
              <Link className="text-red-400"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiYoutube />
              </Link>
              <Link className="text-blue-700"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook />
              </Link>
              <Link className="text-blue-300"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </Link>
            </div>
          </div>


        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
          

          {/* Links Section */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-16 space-y-6 md:space-y-0">
            {/* Column 1 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-semibold text-gray-800">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-semibold text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500">Cookies</a></li>
                <li><a href="#" className="hover:text-blue-500">License</a></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-semibold text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
                <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
                <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">iOS & Android</a></li>
                <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
                <li><a href="#" className="hover:text-blue-500">Customers</a></li>
                <li><a href="#" className="hover:text-blue-500">API</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-b-md sm:rounded-l-none sm:rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">
                Lore imp sum dolor Amit.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          © Farooque | All Rights Reserved 2024. roll no:00151725  work by : Farooque Malik
        </div>
      </div>
    </footer>
  );
};

export default Footer;