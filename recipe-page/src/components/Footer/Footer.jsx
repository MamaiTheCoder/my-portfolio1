import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      Made for the book,
      <Link href="http://rwd.education">
        'Resonsive web design with HTML5 and CSS'
      </Link>
      by
      <address>
        <a href="http://benfrain">Ben Frain</a>
      </address>
    </footer>
  );
};

export default Footer;
