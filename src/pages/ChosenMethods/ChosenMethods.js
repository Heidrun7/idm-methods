import React, { useState, useEffect } from "react";
import ChosenMethod from "../../components/ChosenMethod/ChosenMethod";
import { Link } from "react-router-dom";
// import "./ChosenMethods.css";
import myMethodsList from "../../files/myMethods.json";
// import AllMethodsTable from "../../components/AllMethodsTable/AllMethodsTable";

const ChosenMethods = () => {
  // Sort the methods by id
  const chosenMethodsList = myMethodsList.sort((a, b) =>
    a.Number > b.Number ? 1 : b.Number > a.Number ? -1 : 0
  );

  let methodList = <></>;

  // Map the methods and display links to them
  if (chosenMethodsList.length) {
    methodList = Object.keys(chosenMethodsList).map((key, i) => {
      console.log(key, i, chosenMethodsList[i]);
      return (
        <div>
          <Link
            to={{
              pathname: "/chosen-methods/" + chosenMethodsList[i].Number,
            }}
          >
            Method {chosenMethodsList[i].Number}: {chosenMethodsList[i].Name}
          </Link>
        </div>
      );
    });
  }

  return <div className="wrapper">{methodList}</div>;
};

export default ChosenMethods;
