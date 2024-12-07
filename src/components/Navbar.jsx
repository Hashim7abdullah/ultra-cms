import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaUser, FaCompass, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/logo-transparent-svg.svg";
import MobileBottomNavbar from "./MobileBottomNavbar";

const Navbar = () => {
  return (
    <>
      <motion.nav 
        className="fixed hidden md:block top-0 left-0 w-full backdrop-blur-sm z-50 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 
          flex justify-between items-center h-20 
          bg-black/30"
        >
          <div className="w-full h-16 
            bg-white/5 
            border border-white/20 
            relative 
            transform 
            skew-x-[-deg] origin-center 
            flex justify-between items-center 
            px-4"
          >
            {/* Logo on the left */}
            <div className="flex items-center  ">
              <Link to="/" className="flex items-center">
                <img 
                  src={Logo} 
                  alt="ULTRA Logo" 
                  className="h-8 w-auto object-contain brightness-200" 
                />
              </Link>
            </div>

            {/* Navigation items on the right */}
            <div className="flex items-center space-x-4 ">
              {/* Explore */}
              <motion.div 
                className="flex items-center justify-center 
                w-10 h-10 rounded-full 
                bg-white/20 text-white hover:bg-white/30 
                transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/sections" className="flex items-center justify-center">
                  <FaCompass className="text-xl" />
                </Link>
              </motion.div>

              {/* About */}
              <motion.div 
                className="flex items-center justify-center 
                w-10 h-10 rounded-full 
                bg-white/20 text-white hover:bg-white/30 
                transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/about-us-sections" className="flex items-center justify-center">
                  <FaInfoCircle className="text-xl" />
                </Link>
              </motion.div>

              {/* Launch Mode */}
              <motion.div 
                className="flex items-center justify-center 
                w-10 h-10 rounded-full 
                bg-white/20 text-white hover:bg-white/30 
                transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/main" className="flex items-center justify-center">
                  <FaRocket className="text-xl" />
                </Link>
              </motion.div>

              {/* Login */}
              <motion.div 
                className="flex items-center justify-center 
                w-10 h-10 rounded-full 
                bg-white/20 text-white hover:bg-white/30 
                transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/login" className="flex items-center justify-center">
                  <FaUser className="text-xl" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>
      <MobileBottomNavbar />
    </>
  );
};

export default Navbar;