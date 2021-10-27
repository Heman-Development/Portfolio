import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span>&copy; 2021 All rights reserved.</span>
      <a href="https://www.linkedin.com/in/heydar-molaei-forouhar/" target="_blank" rel="noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>

      <a href="https://github.com/Heman-Development" target="_blank" rel="noreferrer">
        <i class="fab fa-github"></i>
      </a>

      {/* <a href="#">
        <i class="fab fa-xing"></i>
      </a> */}
    </footer>

  );
};

export default Footer;