import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div className="container">
    <div className="text-center">
      <Link to="/">Home Page</Link>
      <h2> About </h2>
      <p>
        This app uses React, Redux, React Router, and many other helpful
        libraries.
      </p>
    </div>
  </div>
);

export default AboutPage;
