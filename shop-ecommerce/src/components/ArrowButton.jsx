// src/components/ArrowButton.jsx
const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 ${
        direction === "left" ? "left-2" : "right-2"
      }`}
    >
      {direction === "left" ? "◀" : "▶"}
    </button>
  );
  
  export default ArrowButton;
  