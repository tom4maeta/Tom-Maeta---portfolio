import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImage from "../../assets/Images/about.png";
import {
  FaLaptopCode,
  FaServer,
  FaRocket,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

/* ================= DATA ================= */
const skills = [
  { name: "JavaScript", percentage: 95, icon: <FaLaptopCode /> },
  { name: "React", percentage: 90, icon: <FaLaptopCode /> },
  { name: "Tailwind CSS", percentage: 85, icon: <FaLaptopCode /> },
  { name: "Laravel/PHP", percentage: 80, icon: <FaServer /> },
  { name: "Vue.js", percentage: 75, icon: <FaLaptopCode /> },
  { name: "Django", percentage: 70, icon: <FaServer /> },
  { name: "MySQL", percentage: 90, icon: <FaServer /> },
  { name: "Ethical Hacking", percentage: 70, icon: <FaLaptopCode /> },
  { name: "Risk Management", percentage: 75, icon: <FaLaptopCode /> },
];

const highlights = [
  { title: "Projects Completed", value: 20, icon: <FaRocket /> },
  { title: "Years Experience", value: 2, icon: <FaLaptopCode /> },
  { title: "Clients Served", value: 10, icon: <FaServer /> },
];

const achievements = [
  { title: "Awards", value: 5, icon: <FaAward /> },
  { title: "Certifications", value: 8, icon: <FaCertificate /> },
  { title: "Open Source Contributions", value: 12, icon: <FaLaptopCode /> },
];

/* ================= COMPONENT ================= */
const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [skillCounters, setSkillCounters] = useState(skills.map(() => 0));
  const [highlightCounters, setHighlightCounters] = useState(highlights.map(() => 0));
  const [achievementCounters, setAchievementCounters] = useState(achievements.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Counter animation for stats
  useEffect(() => {
    if (!inView) return;

    const animateCounters = (items, setter) => {
      const intervals = items.map((item, index) => {
        let start = 0;
        const end = item.percentage ?? item.value;
        
        return setInterval(() => {
          start += 1;
          setter((prev) => {
            const updated = [...prev];
            updated[index] = Math.min(start, end);
            return updated;
          });
          if (start >= end) clearInterval(intervals[index]);
        }, 20);
      });
    };

    animateCounters(skills, setSkillCounters);
    animateCounters(highlights, setHighlightCounters);
    animateCounters(achievements, setAchievementCounters);
  }, [inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden
        bg-gradient-to-br from-slate-50 via-white to-indigo-50
        dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950
        transition-colors duration-300"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]
        bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
        bg-[size:40px_40px] pointer-events-none" />

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 
        bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-72 h-72 sm:w-96 sm:h-96 
        bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* INTRO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold 
              leading-tight tracking-tight text-gray-900 dark:text-white">
              About <span className="text-transparent bg-clip-text 
                bg-gradient-to-r from-indigo-600 to-purple-600">Me</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 sm:h-2 bg-gradient-to-r from-indigo-600 to-purple-600 
                rounded-full mt-4"
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed 
            text-gray-700 dark:text-gray-300 max-w-3xl">
            I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Tom Maeta
            </span>, a full-stack developer focused on building{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              secure, scalable, and user-centric
            </span>{" "}
            digital solutions with modern technologies and strong UX principles.
          </p>
        </motion.div>

        {/* CONTENT & IMAGE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 
          items-start w-full">

          {/* LEFT - SKILLS, STATS, ACHIEVEMENTS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="space-y-8 sm:space-y-10 order-2 lg:order-1 w-full"
          >
            {/* SKILLS SECTION */}
            <SkillsSection skillCounters={skillCounters} />

            {/* HIGHLIGHTS STATS */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {highlights.map((item, i) => (
                  <StatCard
                    key={`highlight-${item.title}`}
                    icon={item.icon}
                    value={highlightCounters[i]}
                    label={item.title}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* ACHIEVEMENTS SECTION */}
            <div className="w-full pt-4 sm:pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold 
                text-gray-900 dark:text-white mb-4 sm:mb-6">
                Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {achievements.map((item, i) => (
                  <StatCard
                    key={`achievement-${item.title}`}
                    icon={item.icon}
                    value={achievementCounters[i]}
                    label={item.title}
                    delay={i * 0.1 + 0.3}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT - PROFILE IMAGE */}
          <motion.div
            style={{ y: scrollY * 0.03 }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="flex justify-center order-1 lg:order-2 w-full"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Glow background */}
              <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                  from-indigo-400/30 to-purple-400/30 blur-3xl"
              />

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-3xl overflow-hidden
                  border-2 border-white/50 dark:border-white/20
                  shadow-2xl dark:shadow-2xl hover:shadow-indigo-500/30 
                  dark:hover:shadow-indigo-500/20
                  transition-all duration-300 backdrop-blur-md"
              >
                <img
                  src={aboutImage}
                  alt="Tom Maeta - Full Stack Developer"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t 
                  from-indigo-600/0 to-transparent opacity-0 hover:opacity-20 
                  transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



/* ================= SKILLS SECTION COMPONENT ================= */
const SkillsSection = ({ skillCounters }) => (
  <div className="w-full space-y-6">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold 
      text-gray-900 dark:text-white">
      Skills & Expertise
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {skills.map((skill, i) => (
        <motion.div
          key={`skill-${skill.name}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group"
        >
          <div className="flex justify-between items-center mb-2.5">
            <span className="flex items-center gap-2.5 font-medium text-sm sm:text-base 
              text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 
              dark:group-hover:text-indigo-400 transition-colors duration-300">
              <span className="text-lg sm:text-xl">{skill.icon}</span>
              <span className="font-semibold">{skill.name}</span>
            </span>
            <span className="text-xs sm:text-sm font-bold 
              text-indigo-600 dark:text-indigo-400">{skillCounters[i]}%</span>
          </div>
          <div className="relative h-2.5 sm:h-3 bg-gray-200 dark:bg-gray-700 
            rounded-full overflow-hidden shadow-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 
                rounded-full shadow-lg shadow-indigo-500/40"
              initial={{ width: 0 }}
              whileInView={{ width: `${skillCounters[i]}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 + 0.2 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ================= STAT CARD COMPONENT ================= */
const StatCard = ({ icon, value, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -6 }}
    className="relative p-4 sm:p-6 md:p-8 rounded-2xl text-center
      bg-gradient-to-br from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-900/50
      backdrop-blur-xl border border-white/40 dark:border-gray-700/40
      shadow-lg dark:shadow-xl hover:shadow-xl 
      dark:hover:shadow-indigo-500/20 dark:hover:shadow-lg
      transition-all duration-300 overflow-hidden group cursor-pointer"
  >
    {/* Background gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative z-10 space-y-2 sm:space-y-3">
      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 
            dark:text-indigo-400"
        >
          {icon}
        </motion.div>
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold 
        bg-gradient-to-r from-gray-900 to-gray-700 
        dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        {value}
      </div>
      <p className="text-xs sm:text-sm md:text-base font-medium 
        text-gray-600 dark:text-gray-400 
        group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
        transition-colors duration-300">
        {label}
      </p>
    </div>
  </motion.div>
);

export default About;

