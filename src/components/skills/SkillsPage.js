import React from "react";
import { Link } from "react-router-dom";

function SkillsPage(props) {
  return (
    <div className="container-fluid text-center">
      <header className="row justify-content-md-center">
        <div className="col-xs-12">
          <h1>Skills Page</h1>
          <p>Skills page is about the skills baby</p>
        </div>
      </header>
      <main className="row">
        {props.skills.skills.map(skill => (
          <div key={skill.id} className="col main-skills">
            <Link to={skill.slug}>{skill.title}</Link>
            <p>{skill.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default SkillsPage;
