import React from "react";
import { motion } from "framer-motion";
import HomePage from "./HomePage";
import LaunchPage from "./LaunchPage";
import AboutUsPage from "./AboutUs";
import RedColaVariant from "./Varients";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section>
          <HomePage />
        </section>

        <section>
          <LaunchPage />
        </section>
        <section>
          <RedColaVariant />
        </section>
        <section>
          <AboutUsPage />
        </section>
      </motion.div>
    </div>
  );
};

export default LandingPage;
