import React, { useContext } from "react";
import { LoginContext } from "./context/LoginContext";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";

export default function SearchBox(props) {
  const { updateLogin } = useContext(LoginContext);
  return (
    <div className="col col-sm-4 search-resp">
      {/* <p className="search">Search</p> */}
      {/* <p>{AccountCircleOutlined}</p> */}
      <button className="log-button logout" onClick={() => updateLogin(false)}>
        Logout
      </button>
      <input placeholder="Search a Movie.." id="search-input" />
    </div>
  );
}
