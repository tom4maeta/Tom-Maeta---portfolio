import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/Images/hero.png";
import profileImage from "../../assets/Images/profile.png";
import resume from "../../assets/Resume/TomMaeta .pdf";

const TypingParagraph = () => {
  const text = `I design and build secure, scalable, and resilient digital systems for businesses that require reliability, performance, and protection. As the founder of Nexus Security Company - (Startup), I focus on combining modern software engineering with cybersecurity best practices to deliver trusted solutions.`;
  
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let direction = "forward";

    const interval = setInterval(() => {
      if (direction === "forward") {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          index++;
        } else {
          direction = "backward";
        }
      } else {
        if (index > 0) {
          setDisplayedText(text.substring(0, index - 1));
          index--;
        } else {
          direction = "forward";
        }
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
      className="mt-8"
    >
      <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
        {displayedText}
        <motion.span 
          className="inline-block ml-1 w-1 h-6 sm:h-7 bg-gradient-to-r from-indigo-400 to-purple-500"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      </p>
    </motion.div>
  );
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background */}
      <motion.img
        src={heroImage}
        alt="Hero Background"
        style={{ y: scrollY * 0.2 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      {/* Accent Glows */}
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-indigo-600/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[32rem] h-[32rem] bg-purple-600/40 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ y: scrollY * 0.05 }}
            transition={{ duration: 0.8 }}
          >

            {/* Professional Identity */}
            <motion.span 
              className="inline-flex items-center px-4 py-2 mb-8 rounded-full
              text-sm font-medium text-indigo-300 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-xl
              border border-indigo-400/30 hover:border-indigo-400/60 transition-all"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
          
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mb-2"
            >
              <p className="text-lg text-gray-400 font-light tracking-wide">
                Hey there,Welcome!, I'm
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1 
              className="mt-6 text-5xl sm:text-6xl xl:text-7xl font-black leading-tight bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Tom Maeta
            </motion.h1>

            <motion.h2 
              className="mt-4 text-xl sm:text-2xl font-medium text-gray-300 tracking-wide"
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Full-Stack Engineer & Cybersecurity Specialist
            </motion.h2>

            {/* Typing */}
            <TypingParagraph />

            {/* CTA */}
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600
                text-white font-semibold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  View Portfolio
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={resume}
                download="TomMaeta_Resume.pdf"
                className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-xl
                border border-white/20 text-white font-semibold text-lg
                hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Download Resume
                <motion.span 
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            style={{ y: scrollY * 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 blur-2xl opacity-60" />
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 xl:w-80 xl:h-80
                rounded-full overflow-hidden border border-white/30
                bg-white/10 backdrop-blur-xl shadow-2xl"
              >
                <img
                  src={profileImage}
                  alt="Tom Maeta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
