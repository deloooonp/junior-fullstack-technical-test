import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-cover bg-center py-16 px-6 contact-bg">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm border border-orange-500 p-6 md:p-10 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          <span className="text-orange-600">Kontak</span> Kami
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.164260846893!2d106.99837377403803!3d-6.243987961109563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992d9b1560c41%3A0xe7aabf536b2dd433!2sBina%20Sarana%20Informatika!5e0!3m2!1sen!2sid!4v1715148940093!5m2!1sen!2sid"
              width="100%"
              height="100%"
              // style="border: 0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <form className="space-y-6">
            <div className="flex items-center bg-[#4d2f1b] text-white px-4 py-3 border border-orange-500">
              <i className="fas fa-user mr-3"></i>
              <input
                type="text"
                placeholder="Nama"
                className="bg-transparent w-full focus:outline-none placeholder-white"
              />
            </div>
            <div className="flex items-center bg-[#4d2f1b] text-white px-4 py-3 border border-orange-500">
              <i className="fas fa-envelope mr-3"></i>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent w-full focus:outline-none placeholder-white"
              />
            </div>
            <div className="flex items-center bg-[#4d2f1b] text-white px-4 py-3 border border-orange-500">
              <i className="fas fa-phone mr-3"></i>
              <input
                type="tel"
                placeholder="No HP"
                className="bg-transparent w-full focus:outline-none placeholder-white"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-700"
            >
              KIRIM
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
