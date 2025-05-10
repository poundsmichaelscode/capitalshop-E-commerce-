import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-white border-b text-sm py-2 px-6 flex justify-between items-center">
      
      {/* Left links */}
      <div className="flex gap-4 text-gray-600">
        <a href="#" className="hover:text-black">About Us</a>
        <a href="#" className="hover:text-black">Privacy</a>
        <a href="#" className="hover:text-black">FAQ</a>
        <a href="#" className="hover:text-black">Careers</a>
      </div>

      {/* Right side: Wishlist, Track Order, Icons */}
      <div className="flex items-center gap-4 text-gray-600">
        <a href="#" className="hover:text-black">My Wishlist</a>
        <a href="#" className="hover:text-black">Track Your Order</a>

        {/* Icons */}
        <div className="flex gap-3 ml-2 text-gray-600">
          <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
          <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="hover:text-sky-500"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-800"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
