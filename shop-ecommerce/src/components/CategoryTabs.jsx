const tabs = ["Men", "Women", "Baby", "Fashion"];

const CategoryTabs = ({ active, onChange }) => {
  return (
    <div className="flex gap-6 justify-center border-b border-gray-200 text-sm font-medium mt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-2 ${
            active === tab
              ? "text-red-600 border-b-2 border-red-500"
              : "text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;