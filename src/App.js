import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./shared/Header";
import robotimg from "./image/robot.png";

function App() {
  const imgVariant = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="bg-[#030c39] h-screen text-white">
      <Header />
      <section>
        <motion.div className="container mx-auto w-[300px]">
          <div className="flex justify-center items-center flex-col space-y-10 mb-5 text-center">
            <motion.img
              variants={imgVariant}
              transition={{
                ease: "linear",
                duration: 1,
              }}
              animate="animate"
              initial="hidden"
              src={robotimg}
              alt="robot"
            />
            <motion.h1
              className="text-5xl font-extrabold"
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              initial={{ opacity: 0, scale: 0.5 }}
            >
              Artifical Intelligence
            </motion.h1>
            <motion.p
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              initial={{ opacity: 0, scale: 0.5 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
          </div>
          <div className="flex justify-center space-x-3 items-center">
            <button className="text-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-blue-700 text-white font-bold py-2 px-4 w-56  rounded-full">
              Read More
            </button>
            <button className="text-md bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-gradient-to-r from-indigo-500 via-purple-500 rounded-full  w-56">
              Tell a friend
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
