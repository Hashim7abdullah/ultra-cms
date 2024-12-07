import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Users,
  Mail,
  Globe,
  Award,
  Target,
  Layers,
  Clock,
  Heart,
} from "lucide-react";
import Logo from "../../assets/logo-transparent-svg.svg";
import about from "../../assets/Main/Ads.png";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: Math.random() > 0.5 ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <div className="w-full bg-black flex justify-center pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[1300px] bg-black grid grid-cols-1 lg:grid-cols-3 gap-4 p-4"
      >
        {/* Div 1: Company Logo */}
        <motion.div
          variants={itemVariants}
          className="bg-black text-white p-6 flex flex-col items-center justify-center"
        >
          <img src={Logo} alt="Company Logo" className="w-24 h-24 text-white" />
          <p className="text-center">ENERGY BEYOND LIMITS</p>
        </motion.div>

        {/* Div 2: Team Image */}
        <motion.div
          variants={itemVariants}
          className="bg-black lg:col-span-2"
        >
          <img
            src={about}
            alt="Our Team"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Div 3: Mission Statement */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800 text-white p-8 lg:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            We are here to serve you, we are not just a company, we are a
            family.
          </p>
        </motion.div>

        {/* Div 4: Contact Information */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800 text-white p-6 flex flex-col items-center justify-center"
        >
          <Mail className="w-16 h-16 mb-4" />
          <p>ultras@.co</p>
          <p>+91 888889999</p>
        </motion.div>

        {/* Div 5: Values */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800 text-white p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Target className="mr-2 w-5 h-5" /> Integrity
            </li>
            <li className="flex items-center">
              <Heart className="mr-2 w-5 h-5" /> Passion
            </li>
            <li className="flex items-center">
              <Users className="mr-2 w-5 h-5" /> Teamwork
            </li>
          </ul>
        </motion.div>

        {/* Div 6: Achievements */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800 text-white p-6"
        >
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center">
            Awards & Recognition
          </h3>
          <p className="text-center mt-2">
            Leading innovators in technology and design
          </p>
        </motion.div>

        {/* Div 7: Team */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800 text-white p-6"
        >
          <Users className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center">Our Team</h3>
          <p className="text-center mt-2">
            Passionate professionals dedicated to excellence
          </p>
        </motion.div>

        {/* Div 8: Innovation */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800 text-white p-8 lg:col-span-2"
        >
          <Layers className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-center mb-4">
            Innovation Driven
          </h3>
          <p className="text-lg text-center">
            Constantly pushing boundaries and exploring new possibilities
          </p>
        </motion.div>

        {/* Div 9: Timeline */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800 text-white p-6"
        >
          <Clock className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center">Our Journey</h3>
          <p className="text-center mt-2">
            Years of growth, learning, and transformation
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
