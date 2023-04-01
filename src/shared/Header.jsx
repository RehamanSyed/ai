import React, { useState } from "react";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const Header = () => {
  const [showmenu, setShowMenu] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const menu = [
    {
      name: "Services",
      hasIcon: false,
    },
    {
      name: "About Us",
      hasIcon: false,
    },
    {
      name: "Contact Us",
      hasIcon: false,
    },
    {
      name: "Search",
      hasIcon: true,
      icon: <IoSearchOutline className="ml-2" />,
    },
  ];
  const mobilemenu = [
    {
      name: "Services",
      hasIcon: false,
    },
    {
      name: "About Us",
      hasIcon: false,
    },
    {
      name: "Contact Us",
      hasIcon: false,
    },
  ];
  return (
    <>
      <header className="App-header">
        <div className="container mx-auto w-full">
          <nav className="flex items-center justify-between flex-wrap  p-6">
            <div className="flex items-center flex-shrink-0  mr-6">
              <span className="font-semibold text-2xl tracking-tight">
                LOGO
              </span>
            </div>
            <div className="flex lg:hidden relative z-10">
              <button
                onClick={() => setShowMenu(true)}
                className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
              >
                <AiOutlineMenu />
              </button>
            </div>
            <div className="hidden lg:flex lg:items-center lg:w-auto">
              <ul className="text-sm flex lg:flex-grow space-x-10">
                {menu.map((list, idx) => {
                  return (
                    <li>
                      <a
                        href="#"
                        className="block mt-4 lg:flex justify-between items-center space-x-3 lg:mt-0  mr-4"
                      >
                        {list.name}
                        {list.hasIcon ? list.icon : ""}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          <motion.div
            className={`${
              showmenu ? "block top-0" : "hidden -top-100"
            } bg-white h-[45%]  text-black absolute transition-all duration-500 ease-in-out  left-0 z-10 w-full`}
            transition={{
              duration: 5,
            }}
          >
            <div className="flex justify-between items-centerp  p-3">
              <h1 className="text-3xl font-bold">Logo</h1>
              <button className=" " onClick={() => setShowMenu(false)}>
                <AiFillCloseCircle size="32" />
              </button>
            </div>
            <div className="mt-5">
              <input
                type="text"
                className="border p-2 px-5  outline-none w-[90%] rounded-lg mx-4 border-black"
                placeholder="Search"
              />
            </div>
            <ul className="mt-5 w-full">
              {mobilemenu.map((list, idx) => {
                return (
                  <li className="">
                    <a href="#" className="flex py-3 px-5 font-semibold">
                      {list.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
