import React, { useState, useEffect } from "react";
import ChosenMethod from "../../components/ChosenMethod/ChosenMethod";
import { Link } from "react-router-dom";
// import "./ChosenMethods.css";
// import allMethodsList from "../../files/allMethodsAndPhases.json";
// import AllMethodsTable from "../../components/AllMethodsTable/AllMethodsTable";

const ChosenMethods = () => {
  // Map the methods and display links to
  return (
    <div className="wrapper">
      <Link
        to={{
          pathname: "/chosen-methods/" + 1,
        }}
      >
        Link
      </Link>
    </div>
  );
};

export default ChosenMethods;
