import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-gray-100 text-sm py-2 px-4 hidden lg:flex justify-between items-center">
      {/* Left Side Links */}
      <div className="flex gap-4 text-gray-600">
        <a href="#">About Us</a>
        <a href="#">Privacy</a>
        <a href="#">FAQ</a>
        <a href="#">Careers</a>
      </div>

      {/* Right Side Links and Icons */}
      <div className="flex gap-4 items-center">
        <a href="#">My Wishlist</a>
        <a href="#">Track Your Order</a>
        <div className="flex gap-3 text-gray-600">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
