import React, { useState, useEffect } from "react";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Services from "./Components/Services/Services.jsx";
import Mywork from "./Components/Mywork/Mywork.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Apply/remove dark class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden scroll-smooth bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar with darkMode state and toggle */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Hero />
        <section className="relative"><About /></section>
        <section className="relative"><Services /></section>
        <section className="relative"><Mywork /></section>
        <section className="relative"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
