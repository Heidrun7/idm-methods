import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { Typography, Divider } from "antd";
const { Title, Paragraph, Text } = Typography;

const Navbar = () => {
  return (
    <div className="nav">
      <div className="links">
        <Link
          to={{
            pathname: "/",
          }}
        >
          {/* <img src={logo} alt="ToolBox" /> */}
          <Title className="linkText" level={5}>
            Home
          </Title>
        </Link>
      </div>
      <div className="links">
        <Link
          to={{
            pathname: "/chosen-methods",
          }}
        >
          <Title className="linkText" level={5}>
            Chosen methods
          </Title>
        </Link>
      </div>
      <div className="links">
        <Link
          to={{
            pathname: "/all-methods",
          }}
        >
          <Title className="linkText" level={5}>
            All methods
          </Title>
        </Link>
      </div>
      <div className="links">
        <Link
          to={{
            pathname: "/tags",
          }}
        >
          <Title className="linkText" level={5}>
            Tags
          </Title>
        </Link>
      </div>
      <div className="links">
        <Link
          to={{
            pathname: "/references",
          }}
        >
          <Title className="linkText" level={5}>
            References
          </Title>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
