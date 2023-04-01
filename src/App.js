import { useState } from "react";
import { animate, motion } from "framer-motion";
import Header from "./shared/Header";
import robot from "./image/robot.svg";

import phone from "./image/phone.svg";
import dots from "./image/dots.svg";
import bgimg from "./image/background.svg";
import { BsArrowRight } from "react-icons/bs";
import Typical from "react-typical";
function App() {
  const imgVariant = {
    animate: {
      y: [50, 0, 50],
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
        {/* container absolute with center flex */}
        <motion.div className="container mx-auto ">
          <div className="flex justify-center items-center flex-col  mb-5 text-center">
            <div className=" absolute  w-64">
              <img src={phone} />
            </div>
            {/* robot animation slide infity times */}
            <motion.img
              variants={imgVariant}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              animate="animate"
              initial="hidden"
              src={robot}
              alt="robot"
              className="w-4/5 h-96"
            />
            {/* dotes image blinking aanimation infity times */}
            <div>
              <motion.img
                src={dots}
                style={{}}
                className="cursor-pointer absolute inset-0 w-full"
                variants={dotsVariant}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 0.9 }}
                transition={{ repeat: Infinity, duration: 5 }}
              />
            </div>
            {/* Text typing with infinity times */}
            <Typical
              steps={["Artifical", 1000, "Artifical Intelligence", 500]}
              loop={Infinity}
              wrapper="h1"
              className="text-[38px] text-center md:text-5xl lg:text-[60px] my-0 lg:my-5 font-extrabold leading-2 relative z-10 w-56 lg:w-96 h-32 lg:h-32"
            />
            <p className="relative z-10 p-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              rem perspiciatis doloribus ,
            </p>

            {/* Buttons */}
            <div className="flex justify-center space-x-3 flex-wrap mt-5 space-y-2 sm:space-y-0 ">
              <button className="flex  items-center justify-center text-md bg-gradient-to-r from-[#2a096b] from-10% via-[#2a096b] via-30% to-[#7a3f9c] to-90% hover:bg-blue-700 text-white font-bold py-2 px-4 w-48    rounded-full">
                Read More <BsArrowRight className="ml-2" />
              </button>
              <button className="flex  items-center justify-center  text-md text-white bg-transparent  font-semibold hover:text-white py-2 px-4 border border-color-gradient-to-r from-[#2a096b]  via-[#2a096b] via-30% to-[#7a3f9c] to-90% rounded-full w-48">
                Tell a friend <BsArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
