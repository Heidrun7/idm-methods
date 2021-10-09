import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="home">
        <Link
          to={{
            pathname: "/",
          }}
        >
          <img src={logo} alt="ToolBox" />
        </Link>
      </div>
      <div className="chosenMethods">
        <Link
          to={{
            pathname: "/chosen-methods",
          }}
        >
          Chosen methods
        </Link>
      </div>
      <div className="allMethods">
        <Link
          to={{
            pathname: "/all-methods",
          }}
        >
          All methods
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
