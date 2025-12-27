import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

import profile_img from "../../assets/profile_img.svg";
import prof_img from "../../assets/a.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img style={{ borderRadius: "50%" }} src={prof_img} alt="" />
      <h1>
        <span>I'm Emmanuel Makokha</span>, full stack developer based in Kenya.
      </h1>
      <p>
        I'm a full stack developer from Nairobi, Kenya with 5 years of
        experience in multiple companies.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
