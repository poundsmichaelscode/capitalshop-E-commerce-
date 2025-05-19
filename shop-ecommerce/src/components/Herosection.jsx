import { motion } from "framer-motion";
import heroImg from "../img/h1_hero2.jpg";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-[600px] flex items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="ml-auto w-[40%] mr-16 text-right font-Jost ">
        <motion.h2
          className="text-pink-500 text-3xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Fashion Sale
        </motion.h2>
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Minimal Menz Style
        </motion.h1>
        <motion.p
          className="text-gray-700 text-md mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Consectetur adipisicing elit. Laborum fuga incidunt
          laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.
        </motion.p>
        <motion.button
          className="bg-black text-white px-6 py-3 uppercase text-sm hover:bg-gray-800"
          whileHover={{ scale: 1.08 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
