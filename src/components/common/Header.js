import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink
        to={process.env.PUBLIC_URL + "/"}
        activeStyle={activeStyle}
        exact
      >
        Home
      </NavLink>
      {" | "}
      <NavLink
        to={process.env.PUBLIC_URL + "/skills"}
        activeStyle={activeStyle}
      >
        Skills
      </NavLink>
      {" | "}
      <NavLink to={process.env.PUBLIC_URL + "/about"} activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
