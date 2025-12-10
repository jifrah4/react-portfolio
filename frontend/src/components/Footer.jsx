import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()} Jesse Ifrah. All rights reserved.
  </footer>
);
export default Footer;