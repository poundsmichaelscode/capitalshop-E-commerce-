import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="bg-[#f4ebd9] min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Customer Testimonial
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Everybody is different, which is why we offer styles for every body.
        </p>
        <p className="text-md md:text-lg text-gray-700 mb-8">
          Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos
          facilis neque nulla earum.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-300">
            <ChevronLeft className="w-6 h-6 text-gray-500" />
          </button>

          <div className="flex items-center gap-4">
            <img
              src="../img/founder-img.png.webp"
              alt="User"
              className="w-14 h-14 rounded-full border"
            />
            <div className="text-left">
              <p className="font-medium text-gray-800">Petey Cruiser</p>
              <p className="text-sm text-gray-500">Designer at Colorlib</p>
            </div>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-300">
            <ChevronRight className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
