import React from "react";

const newsItems = [
  {
    id: 1,
    title: "What Curling Irons Are The Best Ones",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog1.jpg",
    description: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
    category: "Fashion Tips",
  },
  {
    id: 2,
    title: "Vogue’s Ultimate Guide To Autumn/ Winter 2019 Shoes",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog2.jpg",
    description: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
    category: "Fashion Tips",
    highlight: true,
  },
  {
    id: 3,
    title: "What Curling Irons Are The Best Ones",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog3.jpg",
    description: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
    category: "Fashion Tips",
  },
];

const LatestNews = () => {
  return (
    <div className="px-4 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <span className="text-gray-500 text-sm mb-2">{item.category}</span>
            <h3
              className={`text-xl font-semibold mb-2 transition-colors duration-300 hover:text-red-600 ${
                item.highlight ? "text-red-600" : "text-gray-900"
              }`}
            >
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <a
              href="#"
              className="text-black font-semibold hover:scale-105 inline-block transition-transform duration-300"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
