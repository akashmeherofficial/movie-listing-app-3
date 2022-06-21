import Navbar from "./Navbar";

// import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import React, { useState } from "react";
import LandingPage from "./LandingPage";
import TrendingPage from "./TrendingPage";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  const [theme, setTheme] = useState("");
  return (
    <div className="container" style={{ backgroundColor: `${theme}` }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <LandingPage />
        <TrendingPage />
        <Services />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default Home;
