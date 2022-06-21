import React, { useContext } from "react";
import { LoginContext } from "./context/LoginContext";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./Header";

function Login() {
  const { updateLogin, setUsername } = useContext(LoginContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="login" style={{ backgroundColor: `${theme}` }}>
      <div className="login-header">
        <Header />
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
