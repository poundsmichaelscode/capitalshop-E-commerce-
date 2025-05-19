import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 lg:px-24 pt-16 pb-6 text-sm">
      {/* Newsletter */}
      <div className="border-b border-gray-800 pb-12">
        <h2 className="text-2xl font-semibold mb-2">Subscribe Newsletter</h2>
        <p className="text-gray-300 mb-6">
          Subscribe newsletter to get 5% on all products.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full max-w-3xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-md text-black w-full sm:w-auto"
          />
          <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/images/logo.png" alt="Capital Shop" className="w-10 h-10" />
          <h3 className="text-xl font-semibold">
            Capital <span className="font-normal">Shop</span>
          </h3>
        </div>

        {/* Shop Men */}
        <div>
          <h4 className="font-semibold mb-3">Shop Men</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Clothing Fashion</li>
            <li>Winter</li>
            <li>Summer</li>
            <li>Formal</li>
            <li>Casual</li>
          </ul>
        </div>

        {/* Shop Women */}
        <div>
          <h4 className="font-semibold mb-3">Shop Women</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Clothing Fashion</li>
            <li>Winter</li>
            <li>Summer</li>
            <li>Formal</li>
            <li>Casual</li>
          </ul>
        </div>

        {/* Baby Collection */}
        <div>
          <h4 className="font-semibold mb-3">Baby Collection</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Clothing Fashion</li>
            <li>Winter</li>
            <li>Summer</li>
            <li>Formal</li>
            <li>Casual</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Track Your Order</li>
            <li>Support</li>
            <li>FAQ</li>
            <li>Carrier</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 mt-12 pt-6 text-gray-400 text-sm">
        <p className="text-center">
          Copyright © 2025 All rights reserved | This template is made with
          <span className="text-red-500 px-1">❤️</span> by <span className="text-red-500">Colorlib</span>
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" />
          <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" />
          <img src="/images/youtube.png" alt="YouTube" className="w-5 h-5" />
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-red-600 p-3 rounded-full shadow-lg hover:bg-red-700">
          <img src="/images/up-arrow.png" alt="Go to top" className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
