import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="relative">
        {/* Outer Glow Ring */}
        <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-blue-500 animate-spin absolute blur-[2px] opacity-70"></div>

        {/* Inner Glass Circle */}
        <div className="w-20 h-20 bg-white/40 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl border border-white/30">
          <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
