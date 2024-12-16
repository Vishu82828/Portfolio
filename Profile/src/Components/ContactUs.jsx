import React from "react";
import { toast } from "react-toastify";
// import emailIcon from "../assets/contact/emailIcon.png";
// import linkedinIcon from "../assets/contact/linkedinIcon.png";
// import githubIcon from "../assets/contact/githubIcon.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  return (
    <footer id="contact" className="container">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="links">
        <li className="link">
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className="link">
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className="link">
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
