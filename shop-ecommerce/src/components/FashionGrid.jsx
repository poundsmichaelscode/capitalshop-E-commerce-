import React from "react";

const categories = [
  {
    title: "Men’s Fashion",
    img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items1.jpg", 
    hover: true,
  },
  {
    title: "Women’s Fashion",
    img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items2.jpg", 
    hover: true,
  },
  {
    title: "Baby Fashion",
    img: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items3.jpg",
    hover: true,
  },
];

const FashionGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {categories.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-5">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            {item.hover && (
              <p className="opacity-0 group-hover:opacity-100 transition duration-300 mt-2 underline text-sm">
                Shop Now
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FashionGrid;
