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
          <div key={skill.id} className="col-xs-4 main-skills">
            <Link to={skill.slug}>{skill.title}</Link>
            <p>
              This is all about some text to write so that it fills up the page
              and I can get a sense of what to say and how long to say it
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default SkillsPage;
