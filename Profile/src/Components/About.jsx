import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Styles/About.css";

const About = () => {
  const notify = () => toast("This is a notification!");

  return (
    <section className="about" id="about">
      <h2 className="title">About</h2>
      <div className="content">
        <img
          src="/assets/aboutImage.png"
          alt="Me sitting with a laptop"
          className="aboutImage"
        />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src="/assets/css.png" alt="CSS icon" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
              <Link to="/projects" className="link">See Projects</Link>
            </div>
          </li>
          <li className="aboutItem">
            <img src="/assets/serverIcon.png" alt="Server icon" />
            <div className="aboutItemText">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs
              </p>
              <Link to="/projects" className="link">See Projects</Link>
            </div>
          </li>
          <li className="aboutItem">
            <img src="/assets/uiIcon.png" alt="UI icon" />
            <div className="aboutItemText">
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
              <Link to="/projects" className="link">See Projects</Link>
            </div>
          </li>
        </ul>
        <button onClick={notify} className="notifyButton">Show Notification</button>
        <ToastContainer />
      </div>
    </section>
  );
};

export default About;
