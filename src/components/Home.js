import Navbar from "./Navbar";
import Cards from "./Cards";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container" style={{ backgroundColor: `${theme}` }}>
      <Navbar />
      <Cards />
    </div>
  );
}

export default Home;
