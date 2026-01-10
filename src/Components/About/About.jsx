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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  /* Parallax */
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Counter Animation */
  useEffect(() => {
    if (!inView) return;

    const animate = (items, setter) => {
      items.forEach((item, index) => {
        let start = 0;
        const end = item.percentage ?? item.value;
        const interval = setInterval(() => {
          start += 1;
          setter((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });
          if (start >= end) clearInterval(interval);
        }, 20);
      });
    };

    animate(skills, setSkillCounters);
    animate(highlights, setHighlightCounters);
    animate(achievements, setAchievementCounters);
  }, [inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 overflow-hidden
        bg-gradient-to-br from-slate-50 via-white to-indigo-50
        dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
    >
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            style={{ y: scrollY * 0.05 }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-3xl" />
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden
                border border-white/30 dark:border-white/10
                shadow-2xl backdrop-blur-md">
                <img
                  src={aboutImage}
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            style={{ y: scrollY * 0.02 }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              About <span className="text-indigo-600">Me</span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
              I’m <span className="font-semibold text-indigo-600">Tom Maeta</span>, a
              full-stack developer focused on building
              <span className="font-semibold"> secure, scalable, and user-centric </span>
              digital solutions with modern technologies and strong UX principles.
            </p>

            {/* SKILLS */}
            <div className="space-y-4 mb-10">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="flex items-center gap-2 font-medium">
                      {skill.icon} {skill.name}
                    </span>
                    <span className="text-sm">{skillCounters[i]}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${skillCounters[i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {highlights.map((item, i) => (
                <StatCard key={item.title} icon={item.icon} value={highlightCounters[i]} label={item.title} />
              ))}
            </div>

            {/* ACHIEVEMENTS */}
            <h3 className="text-2xl font-bold mb-4">Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {achievements.map((item, i) => (
                <StatCard key={item.title} icon={item.icon} value={achievementCounters[i]} label={item.title} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ================= SMALL CARD ================= */

const StatCard = ({ icon, value, label }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="p-6 rounded-2xl text-center
      bg-white/70 dark:bg-gray-900/70
      backdrop-blur-xl border border-white/30 dark:border-gray-800
      shadow-lg transition"
  >
    <div className="text-indigo-600 text-xl mb-2">{icon}</div>
    <div className="text-2xl font-extrabold">{value}</div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</p>
  </motion.div>
);

export default About;
