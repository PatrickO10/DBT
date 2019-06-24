import React from "react";
import { Link } from "react-router-dom";

function SkillPage(props) {
  return (
    <div>
      <Link to={process.env.PUBLIC_URL + "/skills"}>Skills</Link>
      <h1>{props.skill.title}</h1>
      <ul>
        {props.skill.category.map((cat, i) => (
          <li key={i}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillPage;
