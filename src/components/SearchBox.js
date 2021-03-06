import React, { useContext } from "react";
import { LoginContext } from "./context/LoginContext";

export default function SearchBox(props) {
  const { updateLogin } = useContext(LoginContext);
  return (
    <div className="col col-sm-4 search-resp">
      <button className="log-button logout" onClick={() => updateLogin(false)}>
        Logout
      </button>
      <input placeholder="Search a Movie.." id="search-input" />
    </div>
  );
}
