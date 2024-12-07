import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Ads from "../../assets/Main/Ads.png";
import File from "../../assets/Main/file.jpg";
import Button from "../../components/Button";
import image from "../../assets/Main/file1.jpg";
import { useNavigate } from "react-router-dom";

const AnimatedText = React.memo(() => {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;
    const animateText = async () => {
      while (isMounted) {
        await controls.start({
          x: "-100%",
          transition: {
            duration: 50,
            ease: "linear",
          },
        });

        if (isMounted) {
          controls.set({ x: "100%" });
        }
      }
    };

    animateText();

    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls]);

  return (
    <motion.div
      className="absolute bottom-0 left-0 w-full h-full flex items-center overflow-hidden z-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.h1
        animate={controls}
        className="whitespace-nowrap text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-black"
        style={{
          background:
            "linear-gradient(90deg, rgba(252,128,111,1) 0%, rgba(255,248,201,1) 100%)",
          fontFamily: "'Orbitron', sans-serif",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block",
          willChange: "transform",
          width: "max-content",
        }}
      >
        {Array(10).fill("ENERGY BEYOND LIMITS • ").join("")}
      </motion.h1>
    </motion.div>
  );
});

const Main = () => {
  const [isLaunched, setIsLaunched] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleHome = () => {
    navigate("/");
  };

  // Memoize animation configurations to prevent unnecessary re-renders
  const imageAnimation = useMemo(
    () => ({
      initial: {
        opacity: 0,
        scale: 0.8,
        rotate: -360,
        x: "-100%",
        y: "-100%",
      },
      animate: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 15,
          duration: 1.5,
          delay: 1,
        },
      },
    }),
    []
  );

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: "100%" },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    }),
    []
  );

  // Memoize div variants to prevent recreation on every render
  const divVariants = useMemo(
    () => [
      {
        initial: { opacity: 0, scale: 0.7, x: "-100%" },
        animate: {
          x: "0",
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: {
            duration: 1,
            delay: 1,
            type: "spring",
          },
        },
        className: "col-span-2 row-span-2  p-6 rounded-xl",
      },
      {
        initial: { opacity: 0, y: 50 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 1.5,
          },
        },
        className: "col-span-1 row-span-1  p-4 rounded-xl",
      },
      {
        initial: { opacity: 0, y: 50 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.5,
          },
        },
        className: "col-span-1 row-span-2  p-5 rounded-xl",
      },
      {
        initial: { opacity: 0, filter: "blur(10px)" },
        animate: {
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: 1,
            delay: 1,
          },
        },
        className: "col-span-1 row-span-2  p-4 rounded-xl",
      },
      {
        initial: { opacity: 0, x: 100 },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            delay: 1,
          },
        },
        className: "col-span-2 row-span-1  p-5 rounded-xl",
      },
      {
        initial: { opacity: 0, scale: 0.3, x: "-100" },
        animate: {
          opacity: 1,
          scale: 1,
          x: "0",
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 30,
            delay: 1.2,
          },
        },
        className: "col-span-1 row-span-1  p-3 rounded-xl",
      },
      {
        initial: { opacity: 0, x: 100 },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.7,
            delay: 1.5,
          },
        },
        className: "col-span-1 row-span-1  p-4 rounded-xl",
      },
      {
        initial: { opacity: 0, y: "-100" },
        animate: {
          opacity: 1,
          rotate: 0,
          y: "0",
          transition: {
            duration: 0.6,
            delay: 1,
          },
        },
        className: "col-span-1 row-span-2  p-5 rounded-xl",
      },
      {
        initial: { opacity: 0, scale: 0.6 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        },
        className: "col-span-1 row-span-1  p-4 rounded-xl",
      },
    ],
    []
  );

  // Memoize div contents to prevent unnecessary re-renders
  const divContents = useMemo(
    () => [
      {
        type: "stats",
        className: "col-span-2 row-span-2 bg-white p-6 rounded-xl",
        content: (
          <div className="w-full h-full flex flex-col justify-center items-center text-center text-black">
            <h3 className="text-lg md:text-3xl lg:text-5xl font-bold mb-4">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs md:text-sm lg:text-lg font-semibold">
                  +250%
                </p>
                <p>Yearly Growth</p>
              </div>
              <div>
                <p className="text-xs md:text-sm lg:text-lg font-semibold">
                  1M+
                </p>
                <p>Active Users</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        type: "text",
        className: "col-span-1 row-span-1 bg-white p-4 rounded-xl",
        content: (
          <div className="w-full h-full flex flex-col justify-center items-center text-center text-black">
            <h4 className="text-base md:text-xl lg:text-3xl font-bold mb-2">
              HUREYYY
            </h4>
            <p className="text-xs md:text-sm lg:text-lg">
              ENERGY BEYOND LIMITS
            </p>
          </div>
        ),
      },
      {
        type: "image",
        className: "col-span-1 row-span-2   rounded-xl",
        content: (
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={File}
              alt="Product Preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        ),
      },
      {
        type: "chart",
        className: "col-span-1 row-span-2 bg-white p-4 rounded-xl",
        content: (
          <div className="w-full h-full flex flex-col justify-center items-center text-center text-black">
            <h4 className="text-base md:text-xl lg:text-3xl font-bold mb-4">
              Revenue Trend
            </h4>
            <div className="w-full h-2/3 bg-white/30 rounded-lg flex items-end justify-around p-2">
              <div className="w-8 bg-red-400 h-1/2 rounded"></div>
              <div className="w-8 bg-green-500 h-3/4 rounded"></div>
              <div className="w-8 bg-blue-500 h-2/3 rounded"></div>
              <div className="w-8 bg-yellow-400 h-4/5 rounded"></div>
            </div>
          </div>
        ),
      },
      {
        type: "testimonial",
        className: "col-span-2 row-span-1 bg-white p-5 rounded-xl",
        content: (
          <div className="w-full h-full flex flex-col justify-center items-center text-center text-black">
            <p className="italic mb-2 text-base md:text-lg lg:text-xl">
              "Energy beyond limits"
            </p>
            <p className="font-semibold">- Hashim Abdullah, CEO of ULTRA</p>
          </div>
        ),
      },
      {
        type: "icon",
        className: "col-span-1 row-span-1 bg-white p-3 rounded-xl",
        content: (
          <div className="w-full h-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="M3 3v18h18" />
              <path d="M18 17l-5-5-5 5V4h10z" />
            </svg>
          </div>
        ),
      },
      {
        type: "contact",
        className: "col-span-1 row-span-1 bg-white p-4 rounded-xl",
        content: (
          <div className="w-full h-full flex flex-col justify-center items-center text-center tracking-tighter text-black">
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <p className="text-xs md:text-sm lg:text-lg">ultras@.co</p>
            <p className="text-xs md:text-sm lg:text-lg">+91 888889999</p>
          </div>
        ),
      },
      {
        type: "logo",
        className: "col-span-1 row-span-2 bg-black p-5 rounded-xl",
        content: (
          <div className="w-full h-full flex justify-center items-center">
            <div className="text-2xl md:text-4xl lg:text-6xl font-bold ">
              <p
                style={{
                  background:
                    "linear-gradient(90deg, rgba(205,252,255,1) 20%, rgba(255,0,0,1) 29%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition:
                    "opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
                onClick={handleHome}
              >
                ULTRA
              </p>
            </div>
          </div>
        ),
      },
      {
        type: "social",
        className: "col-span-1 row-span-1 bg-white p-4 rounded-xl",
        content: (
          <div className="w-full h-full flex justify-center items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pink-600"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
        ),
      },
    ],
    []
  );

  // Optimize launch button handler
  const handleLaunch = useCallback(() => {
    setIsLaunched(true);
  }, []);

  return (
    <div className="w-full h-auto relative pt-[4rem]">
      {/* Sticky Animated Text Section */}
      <div className="sticky top-[4rem] w-full h-[50vh] flex items-center justify-center flex-col my-16 overflow-hidden">
        <div className="relative w-full h-[9rem] flex items-center justify-center">
          <AnimatedText />
        </div>
      </div>

      {/* Image section */}
      <div className="w-full max-w-[1300px] mx-auto bg-black border border-white/20 rounded-xl shadow-2xl shadow-white/10 relative">
        {!isLaunched ? (
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="w-full md:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden"
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
            >
              <motion.img
                className="w-full h-full object-cover rounded-xl"
                src={Ads}
                alt=""
                loading="lazy"
              />
            </motion.div>

            <Button
              text="LAUNCH"
              size="base"
              bgColor="white/10"
              color="text-white"
              borderRadius="rounded-xl"
              border="border border-white"
              onClick={handleLaunch}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            />
            <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={image}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key="launched-view"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="w-full bg-black rounded-lg p-4 grid grid-cols-3 grid-rows-3 gap-4 min-h-[80vh]"
            >
              {divContents.map((divConfig, index) => (
                <motion.div
                  key={`div-${index}`}
                  initial={divVariants[index].initial}
                  animate={divVariants[index].animate}
                  className={divConfig.className}
                >
                  {divConfig.content}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default React.memo(Main);
