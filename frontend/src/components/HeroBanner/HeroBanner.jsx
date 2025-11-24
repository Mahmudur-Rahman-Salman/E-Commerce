import React from "react";

const HeroBanner = () => {
  return (
    <>
      <div
        className="w-full h-[80vh] rounded-md bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/N1n4Pd0/michael-frattaroli-207280-unsplash.png')",
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center">
          <div className="p-8 lg:w-1/2 text-white">
            <h1 className="text-3xl lg:text-6xl font-bold leading-snug">
              Be fashionable this winter
            </h1>
            <p className="mt-4 text-lg lg:text-xl max-w-lg">
              We arranged a liquidation before the start of the season. Buy
              winter clothes now with a 50% discount
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="py-2 px-6 rounded-full bg-[#64BCAE] text-white hover:bg-transparent hover:border hover:border-[#64BCAE] hover:text-[#64BCAE] transition-all duration-200">
                Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
