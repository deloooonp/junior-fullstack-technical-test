import React from "react";
import { assets } from "../utils/assets";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-16 text-white about-bg"
      // style="background: linear-gradient(to top, #2d1c11 85%, transparent)"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold mb-12">
          <span className="text-orange-500">Tentang</span>
          <span className="text-white">Kami</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-14">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold">
              Kenapa memilih <span className="text-orange-500">cake</span>
              bahagia
            </h3>
            <p className="text-gray-200 leading-relaxed text-xl">
              Didirikan pada tahun 2023, cakebahagia adalah toko kue bergaya
              Eropa di Indonesia. cakebahagia berkomitmen untuk terus memberikan
              yang terbaik dengan mengutamakan kualitas yang premium dan layanan
              yang baik kepada para pelanggan.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={assets.about1}
              alt="Toko kue"
              className="rounded-lg border-2 border-orange-500"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-start md:items-center">
          <div className="md:w-1/2 space-y-4">
            <p className="leading-relaxed text-gray-200 text-xl">
              <span className="text-orange-500">cake</span>bahagia memiliki visi
              untuk menjadi toko roti yang diakui di seluruh Nusantara atas
              kualitas produk yang unggul.
            </p>
            <p className="text-white text-xl">Sedangkan misinya:</p>
            <ul className="list-disc list-inside text-gray-200 space-y-1 text-lg">
              <li>Menjadi toko roti terbaik di Nusantara.</li>
              <li>Menawarkan produk berkualitas tinggi kepada konsumen.</li>
              <li>Berkomitmen untuk menjaga kualitas produk yang konsisten.</li>
              <li>Memberikan pengalaman pelanggan yang memuaskan.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={assets.about2}
              alt="Produk kue"
              className="rounded-lg border-2 border-orange-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
