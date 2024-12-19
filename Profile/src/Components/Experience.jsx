import React, { useEffect, useState } from "react";
import "../Styles/Experience.css";

const Experience = () => {
  const [skills, setSkills] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("/Data/skills.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching skills data:", error));

    fetch("/Data/history.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setHistory(data))
      .catch((error) => console.error("Error fetching history data:", error));
  }, []);

  return (
    <section className="experience" id="experience">
      <h2 className="title">Experience</h2>
      <div className="content">
        <div className="skills">
          {skills.map((skill, id) => (
            <div key={id} className="skill">
              <div className="skillImageContainer">
                <img src={`/assets/${skill.imageSrc}`} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className="history">
          {history.map((historyItem, id) => (
            <li key={id} className="historyItem">
              <img
                src={`/assets/${historyItem.imageSrc}`}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className="historyItemDetails">
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
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
