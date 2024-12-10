import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LaunchPage = lazy(() => import("./pages/LaunchPage"));
const MainPage = lazy(() => import("./pages/Main/Main"));
const VarientsPage = lazy(() => import("./pages/Varients"));
const VarientSectionPage = lazy(() => import("./pages/Main/VarientsSection"));
const AboutUsSectionsPage = lazy(() => import("./pages/Main/AboutUsSections"));
const Login = lazy(() => import("./pages/Login"));
const Signin = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <motion.div
      animate={{
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full"
    />
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/launch" element={<LaunchPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/varients" element={<VarientsPage />} />
            <Route path="/sections" element={<VarientSectionPage />} />
            <Route
              path="/about-us-sections"
              element={<AboutUsSectionsPage />}
            />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
