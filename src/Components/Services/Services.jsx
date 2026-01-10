import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaSearch,
  FaShieldAlt,
  FaBug,
  FaCloud,
  FaLock,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";

/* ================= SERVICES DATA ================= */

const services = [
  {
    category: "Development",
    title: "Web Application Development",
    description:
      "Enterprise-grade, scalable, and responsive web applications engineered with modern frameworks and industry best practices.",
    icon: <FaLaptopCode />,
  },
  {
    category: "Development",
    title: "Backend & API Engineering",
    description:
      "Robust backend architectures, secure RESTful APIs, authentication systems, and optimized database solutions built for scale.",
    icon: <FaServer />,
  },
  {
    category: "Development",
    title: "Mobile Application Development",
    description:
      "Secure, high-performance cross-platform mobile applications delivering seamless user experiences across devices.",
    icon: <FaMobileAlt />,
  },
  {
    category: "Optimization",
    title: "Performance & SEO Optimization",
    description:
      "Improving application speed, visibility, and conversion rates through technical optimization and performance tuning.",
    icon: <FaSearch />,
  },
  {
    category: "Cyber Security",
    title: "Threat Detection & Incident Response",
    description:
      "Continuous monitoring, threat intelligence, and incident analysis to detect, investigate, and mitigate cyber threats.",
    icon: <FaShieldAlt />,
  },
  {
    category: "Cyber Security",
    title: "Vulnerability Assessment & Risk Management",
    description:
      "Comprehensive vulnerability assessments, risk analysis, and remediation strategies to strengthen system defenses.",
    icon: <FaBug />,
  },
  {
    category: "Cyber Security",
    title: "Security Audits & System Hardening",
    description:
      "In-depth security audits, penetration testing, and system hardening aligned with recognized security standards.",
    icon: <FaUserShield />,
  },
  {
    category: "Cloud Security",
    title: "Cloud Infrastructure Security",
    description:
      "Protecting cloud environments through secure access control, network segmentation, monitoring, and best practices.",
    icon: <FaCloud />,
  },
  {
    category: "Compliance",
    title: "Data Protection & Compliance",
    description:
      "Ensuring data confidentiality, integrity, and regulatory compliance through strong governance and security controls.",
    icon: <FaLock />,
  },
];

/* ================= COMPONENT ================= */

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden
        bg-gradient-to-br from-slate-50 via-white to-indigo-50
        dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
    >
      {/* Subtle Tech Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
        bg-[size:48px_48px]"
      />

      {/* Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
  MY <span className="text-indigo-600">SKILLS</span>
</h2>
<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
  I specialize in building robust, secure, and scalable digital solutions, 
  leveraging modern technologies in full-stack development, cloud systems, 
  and cyber security. My expertise spans from creating efficient web and mobile 
  applications to implementing advanced security measures that protect 
  critical data and ensure system integrity.
</p>

        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="relative group p-8 rounded-2xl
                bg-white/70 dark:bg-gray-900/70
                backdrop-blur-xl border border-white/30 dark:border-gray-800
                shadow-lg hover:shadow-2xl transition-all"
            >
              {/* CATEGORY */}
              <span
                className="absolute top-5 right-5 text-xs font-semibold
                px-3 py-1 rounded-full
                bg-indigo-100 text-indigo-700
                dark:bg-indigo-900/40 dark:text-indigo-300"
              >
                {service.category}
              </span>

              {/* ICON */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl
                bg-gradient-to-tr from-indigo-500 to-purple-600
                text-white text-2xl mb-6 shadow-md"
              >
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2
                  text-indigo-600 dark:text-indigo-400
                  font-semibold text-sm transition-all
                  group-hover:gap-3"
              >
                Learn More
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
