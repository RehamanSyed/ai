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
  return (
    <header className="App-header">
      <div className="container mx-auto w-full">
        <nav className="flex items-center justify-between flex-wrap  p-6">
          <div className="flex items-center flex-shrink-0  mr-6">
            <span className="font-semibold text-2xl tracking-tight">LOGO</span>
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
                      href="#responsive-header"
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
            showmenu ? "flex" : "hidden"
          } bg-white h-screen top-0 text-black absolute left-0 z-10 w-full`}
          animate={{ x: [0, 0] }}
          transition={{
            duration: 5,
          }}
        >
          <button
            className=" absolute right-3 top-2"
            onClick={() => setShowMenu(false)}
          >
            <AiFillCloseCircle size="28" />
          </button>
          <ul className="mt-10">
            {menu.map((list, idx) => {
              return (
                <li className="p-2 px-5">
                  <a href="#responsive-header" className="flex ">
                    {list.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
