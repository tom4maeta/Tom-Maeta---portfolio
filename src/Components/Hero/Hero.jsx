import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/Images/hero.png";
import profileImage from "../../assets/Images/profile.png";
import resume from "../../assets/Resume/TomMaeta.pdf";

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
            <span className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full
              text-sm font-medium text-indigo-300 bg-white/10 backdrop-blur-md
              border border-white/20"
            >
              Founder & Lead Engineer — Nexus Security Company - (StartUp)
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
              Tom{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Maeta
              </span>
            </h1>

            <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-gray-200">
              Full-Stack Engineer & Cybersecurity Specialist
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
              I design and build
              <span className="font-semibold text-white">
                {" "}secure, scalable, and resilient digital systems
              </span>{" "}
              for businesses that require reliability, performance, and protection.
              As the founder of
              <span className="font-semibold text-indigo-400">
                {" "}Nexus Security Company
              </span>, I focus on combining modern software engineering with
              cybersecurity best practices to deliver trusted solutions.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#work"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600
                text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition"
              >
                View Portfolio
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={resume}
                download="TomMaeta_Resume.pdf"
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md
                border border-white/30 text-white font-semibold text-lg
                hover:bg-white/20 transition flex items-center justify-center"
              >
                Download Resume
              </motion.a>
            </div>
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
