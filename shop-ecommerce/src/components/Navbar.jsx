import React from 'react';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-md">
      <h1 className="text-xl font-bold text-red-500">Capital <span className="text-gray-700">Shop</span></h1>
      <ul className="hidden md:flex space-x-6 text-sm font-semibold">
        <li>Home</li>
        <li>Men</li>
        <li>Women</li>
        <li>Baby Collection</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center space-x-4">
        <FaSearch className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <div className="relative">
          <FaShoppingCart className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">1</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
