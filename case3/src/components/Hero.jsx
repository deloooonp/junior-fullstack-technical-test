import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero h-screen bg-cover bg-center text-white flex items-center justify-start hero-bg"
      // style="background-image: url('img/bg.jpg')"
    >
      <div className="relative z-10 px-6 md:px-20">
        <h1 className="text-5xl md:text-8xl font-semibold leading-tight max-w-5xl text-shadow">
          Tambahkan
          <br />
          Manisnya <span className="text-orange-500">Hidup</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 font-semi max-w-2xl">
          Selamat datang di
          <span className="text-white font-bold">
            cake<span className="text-orange-500">bahagia</span>.
          </span>
          Nikmati beragam kue beragam dan berkualitas untuk kesempurnaan di
          setiap moment berharga.
        </p>
        <a
          href="#"
          className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded border border-white hover:bg-orange-700 transition"
        >
          Beli Sekarang
        </a>
      </div>
    </section>
  );
};

export default Hero;
