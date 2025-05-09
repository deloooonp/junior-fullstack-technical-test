import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#A47550] text-white py-6 mt-1 border-t border-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-orange-300 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-orange-300 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-orange-300 transition">
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        <div className="flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-orange-300 transition">
            Home
          </a>
          <a href="#about" className="hover:text-orange-300 transition">
            Tentang Kami
          </a>
          <a href="#contact" className="hover:text-orange-300 transition">
            Kontak
          </a>
        </div>

        <div className="text-sm">
          Created by
          <span className="font-semibold text-brown-900"> deloooonp.</span> | ©
          2025.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
