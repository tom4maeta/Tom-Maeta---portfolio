import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 text-gray-400">
      {/* Top Divider Glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ===== BRAND ===== */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white text-2xl font-extrabold">
              <FaShieldAlt className="text-indigo-500" />
              <span>Tom Maeta Aiko</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Cybersecurity-focused developer building secure, modern, and
              scalable digital solutions for impactful projects.
            </p>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Services", "Work", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-indigo-400 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== CONTACT / SOCIAL ===== */}
          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wide text-lg">Connect</h4>
            <div className="flex gap-4 mb-6">
              <SocialIcon icon={<FaGithub />} link="https://github.com/tom4maeta" />
              <SocialIcon icon={<FaLinkedin />} link="https://www.linkedin.com/in/tom-maeta254" />
              <SocialIcon icon={<FaTwitter />} link="https://twitter.com/yourusername" />
              <SocialIcon icon={<FaEnvelope />} link="mailto:yourname@email.com" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Let’s collaborate on secure & impactful digital solutions.
            </p>
          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="mt-20 pt-10 border-t border-gray-800 text-center text-sm space-y-2">
          <p className="text-gray-400">
            © {new Date().getFullYear()} <span className="text-white font-medium">Tom Maeta Aiko</span>. All rights reserved.
          </p>
          <p className="text-gray-500">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ===== SOCIAL ICON ===== */
const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-11 h-11 flex items-center justify-center
      rounded-xl bg-gray-800 text-gray-300
      hover:bg-indigo-600 hover:text-white
      shadow-md hover:shadow-lg
      transition-all duration-300
    "
  >
    {icon}
  </a>
);

export default Footer;
