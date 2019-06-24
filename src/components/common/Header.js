import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <div className="container">
      <nav className="row">
        <div className="col-xs-12">
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
          <NavLink
            to={process.env.PUBLIC_URL + "/about"}
            activeStyle={activeStyle}
          >
            About
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
