import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/portfolio.png";
import { FaSun, FaMoon } from "react-icons/fa";

/* Sections for ScrollSpy */
const sections = ["home", "about", "work", "services", "contact"];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [togglePressed, setTogglePressed] = useState(false);

  /* Scroll effects */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 80);
      setLastScrollY(currentScrollY);

      // ScrollSpy
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;
        const offsetTop = el.offsetTop - 120;
        const offsetBottom = offsetTop + el.offsetHeight;
        if (currentScrollY >= offsetTop && currentScrollY < offsetBottom) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#work", id: "work" },
    { name: "Skills", href: "#services", id: "services" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${hidden ? "-translate-y-full" : "translate-y-0"}
      ${scrolled
        ? "bg-white/80 dark:bg-gray-900/80 shadow-xl backdrop-blur-2xl"
        : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl"}
      border-b border-gray-200/40 dark:border-gray-700/40`}
    >
      {/* Gradient glow line */}
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Portfolio Logo"
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute inset-0 rounded-full blur-md bg-indigo-500 opacity-0 group-hover:opacity-30 transition" />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              <span className="ml-2 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                TOM
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative font-medium transition-colors
                  ${
                    active === link.id
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:bg-indigo-600 after:transition-all after:duration-300
                  ${active === link.id ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
              >
                {link.name}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 rounded-full font-semibold text-white
              bg-gradient-to-r from-indigo-600 to-purple-600
              shadow-md hover:shadow-xl hover:scale-[1.05]
              transition-all duration-300"
            >
              Hire Me
            </a>

            {/* Dark/Light Toggle – AFTER Hire Me */}
            <button
              onClick={toggleDarkMode}
              onMouseDown={() => setTogglePressed(true)}
              onMouseUp={() => setTogglePressed(false)}
              onMouseLeave={() => setTogglePressed(false)}
              className={`ml-3 p-2 rounded-lg transition focus:outline-none
                ${darkMode ? "bg-indigo-600 text-white" : "text-gray-800 dark:text-gray-200"}
                ${togglePressed ? "scale-95" : "hover:scale-[1.03]"}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-xl text-gray-900 dark:text-white
            hover:bg-gray-100 dark:hover:bg-gray-800
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-6 space-y-4 bg-white dark:bg-gray-900">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium transition-colors
                ${
                  active === link.id
                    ? "text-indigo-600"
                    : "text-gray-800 dark:text-gray-200 hover:text-indigo-600"
                }`}
            >
              {link.name}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-indigo-600 to-purple-600
            shadow hover:shadow-xl transition-all"
          >
            Hire Me
          </a>

          {/* Dark/Light Toggle */}
          <button
            onClick={toggleDarkMode}
            onMouseDown={() => setTogglePressed(true)}
            onMouseUp={() => setTogglePressed(false)}
            onMouseLeave={() => setTogglePressed(false)}
            className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl font-semibold transition
              ${darkMode ? "bg-indigo-600 text-white" : "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"}
              ${togglePressed ? "scale-95" : "hover:scale-[1.02]"}`}
          >
            {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
