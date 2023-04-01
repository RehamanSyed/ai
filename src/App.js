import { useState } from "react";
import { animate, motion } from "framer-motion";
import Header from "./shared/Header";
import robotesimg from "./image/robotes.svg";
import dotsimg from "./image/dots.svg";
import bgimg from "./image/BG.svg";
function App() {
  const imgVariant = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 100,
      opacity: 1,
    },
  };
  const dotsVariant = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <div
      className=" min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundColor: "#1d064a", backgroundImage: `url(${bgimg})` }}
    >
      <Header />
      <section className="absolute min-h-screen inset-0 flex justify-center items-center">
        <motion.div className="container mx-auto w-[400px]">
          <div className="flex justify-center items-center flex-col  mb-5 text-center">
            <motion.img
              variants={imgVariant}
              transition={{
                ease: "linear",
                duration: 1,
              }}
              animate="animate"
              initial="hidden"
              src={robotesimg}
              alt="robot"
              className="w-96 h-96"
            />
            <div>
              <motion.img
                src={dotsimg}
                style={{}}
                className="cursor-pointer absolute inset-0 w-full"
                variants={dotsVariant}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 0.8 }}
                transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                // transition={{
                //   repeat: Infinity,
                //   repeatDelay: 4,
                //   ease: "linear",
                //   duration: 5,
                // }}
              />
            </div>
            <motion.h1
              className=" text-[36px] md:text-5xl lg:text-[60px] font-extrabold mb-5 relative z-10 leading-tight"
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              rem perspiciatis doloribus corporis,
            </motion.p>
            <div className="flex justify-center space-x-3 items-center mt-5 ">
              <button className="text-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-blue-700 text-white font-bold py-2 px-4 w-32 md:w-40 lg:w-56  rounded-full">
                Read More
              </button>
              <button className="text-md text-white bg-transparent  font-semibold hover:text-white py-2 px-4 border border-gradient-to-r from-indigo-500 via-purple-500 rounded-full w-32 md:w-40 lg:w-56">
                Tell a friend
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
