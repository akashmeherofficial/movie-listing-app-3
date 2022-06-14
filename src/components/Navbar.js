import React, { useContext } from "react";
import SearchBox from "./SearchBox";
import { ThemeContext } from "./context/ThemeContext";
import Username from "./Username";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="nav" style={{ backgroundColor: `${theme}` }}>
        <Username />
        <div className="header">
          <h1 className="heading">TOP MOVIES</h1>
          <h4 className="tag">Best Movies Collections for your Weekend</h4>
        </div>
        <div className="search">
          <SearchBox />
        </div>
      </div>
    </>
  );
}
