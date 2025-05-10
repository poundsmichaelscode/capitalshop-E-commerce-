// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import heroImg1 from "../img/h1_hero2.jpg";
// import heroImg2 from "../img/h1_hero1.jpg.webp"; 

// const images = [heroImg1, heroImg2];

// const HeroCarousel = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000); // 5 seconds delay
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative h-[600px] overflow-hidden">
//       <AnimatePresence>
//         <motion.div
//           key={index}
//           className="absolute w-full h-full bg-cover bg-center flex items-center"
//           style={{ backgroundImage: `url(${images[index]})` }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="ml-auto w-[40%] mr-16 text-right">
//             <motion.h2
//               className="text-pink-500 text-3xl mb-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               Fashion Sale
//             </motion.h2>
//             <motion.h1
//               className="text-5xl font-bold mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Minimal Menz Style
//             </motion.h1>
//             <motion.p
//               className="text-gray-700 text-md mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//             >
//               Consectetur adipisicing elit. Laborum fuga incidunt
//               laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.
//             </motion.p>
//             <motion.button
//               className="bg-black text-white px-6 py-3 uppercase text-sm hover:bg-gray-800"
//               whileHover={{ scale: 1.05 }}
//             >
//               Shop Now
//             </motion.button>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default HeroCarousel;

