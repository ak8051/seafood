import React from "react";
import "./navStyle.css";

const Navbar = () => {
  return (
    <>
      <div className="hero bg-no-repeat bg-contain md:bg-cover bg-local w-full text-white pl-4 md:pl-11">
        {/* Phone Screen */}
        <div className="columns-3xs">
          <div className="text-lg pt-3">NSUOMNAM</div>
        </div>
        <div className="text-4xl font-bold mt-4 pb-4">Savour real Seafood</div>
        <div className="w-64 font-normal text-xs pb-36">
          With a deep-rooted love for all things seafood, our talented chefs
          combine culinary expertise with creativity to craft dishes that
          celebrate the ocean's treasures.
        </div>
      </div>
    </>
  );
};

export default Navbar;
