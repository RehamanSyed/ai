import { useState } from "react";
import { animate, motion } from "framer-motion";
import Header from "./shared/Header";
import robotesimg from "./image/robotes.svg";
import robotesimg1 from "./image/robotes1.svg";
import dotsimg from "./image/dots.svg";
import bgimg from "./image/BG.svg";
import { BsArrowRight } from "react-icons/bs";
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
    exit: {
      y: 200,
      opacity: 0,
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
  const text = "Artifical Intelligence";
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
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
                repeat: Infinity,
                repeatDelay: 1,
                duration: 2,
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
                animate={{ opacity: 1, scale: 0.9 }}
                transition={{ repeat: Infinity, repeatDelay: 1, duration: 3 }}
                // transition={{
                //   repeat: Infinity,
                //   repeatDelay: 4,
                //   ease: "linear",
                //   duration: 5,
                // }}
              />
            </div>
            <motion.div
              style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {letters.map((letter, index) => (
                <motion.h1
                  variants={child}
                  key={index}
                  className=" text-[36px] md:text-5xl lg:text-[60px] font-extrabold mb-5 relative z-10"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.h1>
              ))}
            </motion.div>
            {/* <motion.h1
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
            </motion.h1> */}
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
            <div className="flex justify-center space-x-3   mt-5 ">
              <button className="flex  items-center text-md bg-gradient-to-r from-[#2a096b] from-10% via-[#2a096b] via-30% to-[#7a3f9c] to-90% hover:bg-blue-700 text-white font-bold py-2 px-4   rounded-full">
                Read More <BsArrowRight className="ml-2" />
              </button>
              <button className="text-md text-white bg-transparent  font-semibold hover:text-white py-2 px-4 border border-gradient-to-r from-indigo-500 via-purple-500 rounded-full w-32">
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
