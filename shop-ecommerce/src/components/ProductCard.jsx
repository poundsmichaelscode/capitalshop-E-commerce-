const ProductCard = ({ image, title, price, oldPrice }) => {
  return (
    <div className="w-full max-w-xs mx-auto text-center">
      <img src={image} alt={title} className="rounded-md mb-4 w-full" />
      <h3 className="text-gray-700">{title}</h3>
      <div className="flex justify-center space-x-2 text-sm mt-1">
        <span className="text-black font-medium">${price}</span>
        <span className="line-through text-gray-400">${oldPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;