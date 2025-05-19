import React from "react";
import { ShoppingCart, Heart, Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cashmere Tank + Bag",
    price: "$98.00",
    oldPrice: "$120.00",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest6.jpg",
  },
  {
    id: 2,
    name: "Cashmere Tank + Bag",
    price: "$98.00",
    oldPrice: "$120.00",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest5.jpg",
  },
  {
    id: 3,
    name: "Cashmere Tank + Bag",
    price: "$98.00",
    oldPrice: "$120.00",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest6.jpg",
  },
  {
    id: 4,
    name: "Cashmere Tank + Bag",
    price: "$98.00",
    oldPrice: "$120.00",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest8.jpg",
  },
];

const ProductCarousel = () => {
  return (
    <div className="px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">You May Like</h2>
      <div className="flex gap-6 justify-center flex-wrap">
        {products.map((product, index) => (
          <div key={index} className="group w-72 transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-cover rounded-md"
              />
              {/* Hover Icons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 hover:text-red-600">
                  <ShoppingCart size={20} />
                </div>
                <div className="p-2 hover:text-red-600">
                  <Heart size={20} />
                </div>
                <div className="p-2 hover:text-red-600">
                  <Plus size={20} />
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-900 group-hover:text-red-600 transition">{product.name}</p>
              <p className="text-lg font-semibold">{product.price}</p>
              <p className="text-sm text-gray-400 line-through">{product.oldPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
