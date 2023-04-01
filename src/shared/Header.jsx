import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
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
          <div className="flex lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
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
      </div>
    </header>
  );
};

export default Header;
