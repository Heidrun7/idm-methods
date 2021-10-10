import React, { useState, useEffect } from "react";
import "./AllMethods.css";
import allMethodsList from "../../files/allMethodsAndPhases.json";
import AllMethodsTable from "../../components/AllMethodsTable/AllMethodsTable";

const AllMethods = () => {
  return (
    <div className="wrapper">
      <AllMethodsTable methods={allMethodsList} />{" "}
    </div>
  );
};

export default AllMethods;
