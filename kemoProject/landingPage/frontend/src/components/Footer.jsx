import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between w-full">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-2">Tentang Kami</h5>
            <p className="text-sm">
              Kami adalah perusahaan yang bergerak di bidang teknologi
              informasi, menyediakan solusi inovatif untuk kebutuhan bisnis
              Anda.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-2">Kontak Kami</h5>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Telepon: +62 123 4567 890</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-2">Ikuti Kami</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; 2024 Perusahaan Teknologi. Semua hak dilindungi
            undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
