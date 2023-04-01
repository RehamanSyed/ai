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
        <motion.div className="container mx-auto ">
          <div className="flex justify-center items-center flex-col  mb-5 text-center">
            <div className=" absolute  w-64">
              <img src={phone} />
            </div>
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

            <Typical
              steps={["Artifical", 1000, "Artifical Intelligence", 500]}
              loop={Infinity}
              wrapper="h1"
              className="text-[36px] text-center h-32 md:text-5xl lg:text-[60px] my-5 font-extrabold leading-2 relative z-10 w-96"
            />

            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              rem perspiciatis doloribus ,
            </p>
            <div className="flex justify-center space-x-3   mt-5 ">
              <button className="flex  items-center text-md bg-gradient-to-r from-[#2a096b] from-10% via-[#2a096b] via-30% to-[#7a3f9c] to-90% hover:bg-blue-700 text-white font-bold py-2 px-4   rounded-full">
                Read More <BsArrowRight className="ml-2" />
              </button>
              <button className="flex  items-center text-md text-white bg-transparent  font-semibold hover:text-white py-2 px-4 border border-color-gradient-to-r from-[#2a096b]  via-[#2a096b] via-30% to-[#7a3f9c] to-90% rounded-full ">
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
