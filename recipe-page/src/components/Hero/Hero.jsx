import React from "react";
import scones from "../../assets/scones.jpg";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="IntroWrapper">
      <p className="IntroText">
        Occasionally maligned and misunderstood; the scone is a quintessentially
        British classic.
      </p>
      <figure className="MoneyShot">
        <img src={scones} alt="Incredible scones" className="MoneyShotImg" />
        <figcaption className="ImageCaption">
          {" "}
          Incredible scones, picture from Wikipedia
        </figcaption>
      </figure>
    </section>
  );
};

export default Hero;
