import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa"; // Importing Font Awesome icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto flex justify-center flex-col md:flex-row items-center  space-y-6 md:space-y-0">
        {/* Connect with Us Section (Left) */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl md:text-2xl font-bold mb-3 text-cyan-400 underline underline-offset-4 decoration-cyan-400 decoration-2">
            Connect with Us
          </h4>
          <div className="flex items-center ml-8 space-x-4 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="container mx-auto text-center mt-6">
        <p className="ml-2 text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400">
          <span className="text-white"> &copy; {currentYear}</span> Instant{" "}
          <span className="text-violet-700">Office</span>
          <span className="text-red-500">Fremantle</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
