import React from "react";
// import aboutImage from "../assets/aboutImage.png"; // Ensure this path is correct
// import cursorIcon from "../assets/about/cursorIcon.png"; // Ensure this path is correct
// import serverIcon from "../assets/about/serverIcon.png"; // Ensure this path is correct
// import "../Styles/About.css"; // Assuming you have an About.css for styles

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">About</h2>
      <div className="content">
        <img src={aboutImage} alt="Me sitting with a laptop" className="aboutImage" />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src={cursorIcon} alt="Cursor icon" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={serverIcon} alt="Server icon" />
            <div className="aboutItemText">
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimized back-end systems and APIs</p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={cursorIcon} alt="UI icon" />
            <div className="aboutItemText">
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages and have created design systems as well</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
