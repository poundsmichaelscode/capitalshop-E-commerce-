// src/components/FeaturesSection.jsx

import React from "react";

const features = [
  {
    title: "Fast & Free Delivery",
    subtitle: "Free delivery on all orders",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services1.svg", // Place your image in public/images/
  },
  {
    title: "Secure Payment",
    subtitle: "Free delivery on all orders",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg",
  },
  {
    title: "Money Back Guarantee",
    subtitle: "Free delivery on all orders",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services3.svg",
  },
  {
    title: "Online Support",
    subtitle: "Free delivery on all orders",
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 border-r last:border-none border-gray-200"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-12 h-12 object-contain mb-2"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
