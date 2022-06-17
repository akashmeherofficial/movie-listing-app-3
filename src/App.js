import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { LoginContext } from "./components/context/LoginContext";
import { ThemeContext } from "./components/context/ThemeContext";

function App() {
  const [isLoggedIn, updateLogin] = useState(false);
  const [theme, setTheme] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider
        value={{ isLoggedIn, updateLogin, username, setUsername }}
      >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {isLoggedIn ? <Home /> : <Login />}
        </ThemeContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
