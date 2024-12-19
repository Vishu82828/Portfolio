import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <footer id="contact" className="contact-container">
      <div className="contact-text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="contact-links">
        <li className="contact-link">
          <img src="/assets/emailIcon.png" alt="Email icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className="contact-link">
          <img src="/assets/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className="contact-link">
          <img src="/assets/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
