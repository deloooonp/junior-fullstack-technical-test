import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-[#e9d1b2] bg-opacity-50 backdrop-blur-md shadow-md fixed top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <a href="#" className="text-2xl font-bold text-orange-600">
            cake<span className="text-gray-800">bahagia</span>.
          </a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6 text-white font-medium">
          <a href="#home" className="hover:text-orange-500">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500">
            Tentang Kami
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Kontak
          </a>
        </div>

        <div className="md:hidden">
          <button id="hamburger-btn" className="text-white text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
