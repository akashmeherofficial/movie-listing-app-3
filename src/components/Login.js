import React, { useContext } from "react";
import { LoginContext } from "./context/LoginContext";
import { ThemeContext } from "./context/ThemeContext";

function Login() {
  const { updateLogin, setUsername } = useContext(LoginContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="login" style={{ backgroundColor: `${theme}` }}>
      <div className="login-header">
        <h1>BINGE HI'T</h1>

        <h4 className="tag">Best Binge Buddy</h4>
      </div>
      <h1>Username</h1>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <h1>Password</h1>
      <input type="password" />
      <div className="login-btn">
        <button className="log-button" onClick={() => updateLogin(true)}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
