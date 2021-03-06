import React, { useContext } from "react";
import SearchBox from "./SearchBox";
import { ThemeContext } from "./context/ThemeContext";
import Username from "./Username";
import Header from "./Header";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <nav className="nav" style={{ backgroundColor: `${theme}` }}>
        <Username />
        <div className="nav-main">
          <Header />

          <div className="navigation">
            <ul>
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a href="/"> Trending </a>
              </li>
              <li>
                <a href="/"> Services </a>
              </li>
              <li>
                <a href="/"> Catagories </a>
              </li>
              <li>
                <a href="/"> Watchlist </a>
              </li>
              <li>
                <a href="/"> Contact Us </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="search">
          <SearchBox />
        </div>
      </nav>
    </>
  );
}
