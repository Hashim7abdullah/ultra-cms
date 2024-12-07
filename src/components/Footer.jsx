import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white py-12 px-4 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">ULTRA</h3>
          <p className="text-gray-400">Energy Beyond Limits</p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <nav className="flex items-center justify-between gap-2">
            <a href="#" className="hover:text-blue-500">About</a>
            <a href="#" className="hover:text-blue-500">Flavors</a>
            <a href="#" className="hover:text-blue-500">Contact</a>
          </nav>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="text-2xl hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-500 border-t border-gray-800 pt-4">
        © 2024 ULTRA Energy Drink. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
