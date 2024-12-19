import React from "react";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm VISHWAJEET</h1>
        <p className="hero-description">
          I'm a full-stack developer with 0.6 years of experience using React and
          MongoDB. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className="hero-contactBtn">
          Contact Me
        </a>
      </div>
      <img
        src="/assets/heroImage.png"
        alt="Hero image of me"
        className="hero-img"
      />
      <div className="top-blur" />
      <div className="bottom-blur" />
    </section>
  );
};

export default Hero;
