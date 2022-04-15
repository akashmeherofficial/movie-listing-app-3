import React, { useContext } from "react";
import { LoginContext } from "./context/LoginContext";

function Username() {
  const { updateLogin, username } = useContext(LoginContext);
  return (
    <>
      <div className="username">
        <h1>Welcome!</h1>
        <h1>Mr(s).</h1>
        <h1>{username}</h1>
        <button className="log-button" onClick={() => updateLogin(false)}>
          Logout
        </button>
      </div>
    </>
  );
}

export default Username;
