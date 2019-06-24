import React from "react";
import { Link } from "react-router-dom";

function SkillsPage(props) {
  return (
    <div>
      <h1>Skills Page</h1>
      <p>Skills page is about the skills baby</p>
      {props.skills.skills.map(skill => (
        <div key={skill.id}>
          <Link to={skill.slug}>{skill.title}</Link>
          {" | "}
        </div>
      ))}
    </div>
  );
}

export default SkillsPage;
