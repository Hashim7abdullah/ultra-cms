import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../assets/file.png";
import Button from "../components/Button";
import { FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LaunchPage = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const canY = useTransform(scrollYProgress, [0, 1], ["-70%", "120%"]);
  const canScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const canOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const handleNavigate = () => {
    navigate("/main");
  };

  return (
    <div
      ref={ref}
      data-scroll-section
      className="h-screen w-full bg-black overflow-hidden relative flex items-center justify-center"
      style={{
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      {/* Top Gradient Overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Top Shadow Overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-16 z-10"
        style={{
          boxShadow: "inset 0 20px 30px -10px rgba(255,255,255,0.1)",
          pointerEvents: "none",
        }}
      />
      {/* Centered Launch Text Box */}
      <div className="absolute z-10 w-[70vw] h-[50vh] md:h-[30vw] bg-black border border-white/20 rounded-xl shadow-2xl shadow-white/10 flex items-center justify-center flex-col">
        <h1
          className="text-[1.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold uppercase tracking-[0.5em] text-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,214,0,1) 14%, rgba(205,252,255,1) 39%, rgba(160,141,0,1) 57%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {["L", "A", "U", "N", "C", "H"].map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>
        <div className="absolute bottom-8">
          <Button
            text="LAUNCH"
            size="base"
            bgColor=""
            color="text-white"
            borderRadius="rounded-lg"
            icon={<FaRocket />}
            onClick={handleNavigate}
          />
        </div>
      </div>
      {/* Animated Can Image */}
      <motion.div
        initial={{ y: "-30%", scale: 1, rotate: 0 }}
        animate={{
          y: 215,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
        style={{
          y: canY,
          scale: canScale,
          opacity: canOpacity,
          position: "absolute",
          transform: "translateX(-50%)",
          zIndex: 9,
          width: "100%",
          maxWidth: "32rem",
          paddingBottom: "2rem",
        }}
      >
        <img
          src={Hero}
          alt="ULTRA Energy Drink"
          className="w-full h-screen object-contain"
          loading="lazy"
        />
      </motion.div>{" "}
    </div>
  );
};

export default LaunchPage;
