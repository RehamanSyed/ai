import React from "react";

import bgimg from "../image/background.svg";

import Header from "../shared/Header";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundColor: "#1d064a", backgroundImage: `url(${bgimg})` }}
    >
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;
