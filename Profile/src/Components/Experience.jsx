import React from "react";
// import skillImage1 from "../assets/skills/skill1.png"; // Example import
// import skillImage2 from "../assets/skills/skill2.png"; // Example import
// import historyImage1 from "../assets/history/history1.png"; // Example import
// import historyImage2 from "../assets/history/history2.png"; // Example import
// import skills from "../data/skills.json";
// import history from "../data/history.json";

const Experience = () => {
  // Map image imports to your data
  const skillImages = {
    skill1: skillImage1,
    skill2: skillImage2,
    // Add all skill image mappings
  };

  const historyImages = {
    history1: historyImage1,
    history2: historyImage2,
    // Add all history image mappings
  };

  return (
    <section className="container" id="experience">
      <h2 className="title">Experience</h2>
      <div className="content">
        <div className="skills">
          {skills.map((skill, id) => (
            <div key={id} className="skill">
              <div className="skillImageContainer">
                <img src={skillImages[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className="history">
          {history.map((historyItem, id) => (
            <li key={id} className="historyItem">
              <img
                src={historyImages[historyItem.imageSrc]}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className="historyItemDetails">
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
