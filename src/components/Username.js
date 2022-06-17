import React, { useContext } from "react";
import { LoginContext } from "./context/LoginContext";
import { ThemeContext } from "./context/ThemeContext";
function Username() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { username } = useContext(LoginContext);

  return (
    <>
      <div className="username">
        <h1>Welcome</h1>
        <h1 id="name">{username}</h1>
        <div className="mode-div">
          <p>Modes</p>
          <div className="mode">
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <button
                className="theme-button day"
                onClick={() => setTheme("#2C5364")}
              >
                D
              </button>
              <button
                className="theme-button night"
                onClick={() => setTheme("#141414")}
              >
                N
              </button>
            </ThemeContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Username;
