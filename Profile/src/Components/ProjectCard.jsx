import React from "react";

const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <div className="projectCard">
      <img src={require(`../assets/${imageSrc}`).default} alt={`Image of ${title}`} className="image" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <ul className="skills">
        {skills.map((skill, id) => (
          <li key={id} className="skill">{skill}</li>
        ))}
      </ul>
      <div className="links">
        <a href={demo} className="link">Demo</a>
        <a href={source} className="link">Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
