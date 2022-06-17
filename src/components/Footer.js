import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-heading">BINGE H'IT</h1>
      <p>Copyright © 2020 BingeHit Inc.</p>
      <div className="footer-link">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
