import { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryTabs from "./CategoryTabs";

const sampleProducts = {
  Men: [
    {
      image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg",
      title: "Cashmere Tank + Bag",
      price: 98,
      oldPrice: 120,
    },
    {
      image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg",
      title: "Cashmere Tank + Bag",
      price: 98,
      oldPrice: 120,
    },
    {
      image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg",
      title: "Cashmere Tank + Bag",
      price: 98,
      oldPrice: 120,
    },
    {
      image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg",
      title: "Cashmere Tank + Bag",
      price: 98,
      oldPrice: 120,
    },
  ],
  Women: [    {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },
  {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },
  {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },
  {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },],
  Baby: [    {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },
  {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },
  {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },
  {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },],
  Fashion: [    {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },
  {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },
  {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },
  {
    image: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg",
    title: "Cashmere Tank + Bag",
    price: 98,
    oldPrice: 120,
  },],
};

const TrendingSection = () => {
  const [activeTab, setActiveTab] = useState("Men");

  return (
    <section className="px-4 md:px-12 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Trending This Week</h2>
      <hr className="my-4" />
      <CategoryTabs active={activeTab} onChange={setActiveTab} />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {sampleProducts[activeTab]?.length > 0 ? (
          sampleProducts[activeTab].map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">No products found</p>
        )}
      </div>
    </section>
  );
};

export default TrendingSection;