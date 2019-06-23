import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>DBT Skills Training</h1>
    <p>DBT skills training</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
    {" | "}
    <Link to="skills" className="btn btn-primary btn-lg">
      Skills Page
    </Link>
  </div>
);

export default HomePage;
