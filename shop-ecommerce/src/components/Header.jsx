import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-red-600">
        <span className="text-black">Capital</span> Shop
      </div>
      <nav className="space-x-6 text-lg font-medium">
        <a href="#">Home</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Baby Collection <span className="text-xs text-red-500 bg-red-100 px-1 rounded">New</span></a>
        <a href="#">Pages</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex gap-4 text-xl">
        <FaSearch />
        <FaUser />
        <div className="relative">
          <FaShoppingCart />
          <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full px-1">1</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
