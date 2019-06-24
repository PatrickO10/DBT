import React from "react";

function SkillPage(props) {
  return (
    <div className="container">
      <section className="justify-content-md-center">
        <header>
          <h1>{props.skill.title}</h1>
        </header>
        <ul>
          {props.skill.category.map((cat, i) => (
            <li key={i}>{cat}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SkillPage;
