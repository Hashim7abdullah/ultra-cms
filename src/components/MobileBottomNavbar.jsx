import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaRocket, FaBars, FaCompass, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const MobileBottomNavbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const navItems = [
    {
      icon: <FaHome />,
      path: "/",
    },
    {
      icon: <FaCompass />,
      path: "/sections",
    },
    {
      icon: <FaRocket />,
      path: "/main",
    },
    {
      icon: <FaUser />,
      path: "/login",
    },
    {
      icon: <FaBars />,
      path: "/menu",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black z-50 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setActiveTab(item.path)}
            className="flex  items-center justify-center w-full py-2"
          >
            <motion.div
              animate={{
                scale: activeTab === item.path ? 1.2 : 1,
                color:
                  activeTab === item.path ? "white" : "rgba(255,255,255,0.6)",
              }}
              transition={{ duration: 0.2 }}
            >
              {React.cloneElement(item.icon, { size: 16 })}
            </motion.div>
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNavbar;
