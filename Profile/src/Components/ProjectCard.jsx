import React from "react";
import "../Styles/ProjectCard.css";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="project-card">
      <img
        src={`/assets/${imageSrc}`}
        alt={`Image of ${title}`}
        className="project-image"
      />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <ul className="project-skills">
        {skills.map((skill, id) => (
          <li key={id} className="project-skill">
            {skill}
          </li>
        ))}
      </ul>
      <div className="project-links">
        <a href={demo} className="project-link">
          Demo
        </a>
        <a href={source} className="project-link">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
