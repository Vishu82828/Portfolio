import React from "react";
// import heroImage from "../assets/hero/heroImage.png";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1 className="title">Hi, I'm Vishwajeet</h1>
        <p className="description">
          I'm a full-stack developer with 0.6 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className="contactBtn">
          Contact Me
        </a>
      </div>
      {/* <img src={heroImage} alt="Hero" className="heroImg" /> */}
      <div className="topBlur"></div>
      <div className="bottomBlur"></div>
    </section>
  );
};

export default Hero;
