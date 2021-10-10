import React, { useState, useEffect } from "react";
import { TagCloud } from "react-tagcloud";
import { Link } from "react-router-dom";
// import ReactWordcloud from "react-wordcloud";
import "./References.css";
import { Typography, Divider } from "antd";
import myMethodsList from "../../files/myMethods.json";

const References = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  let allRefs = [];
  Object.keys(myMethodsList).map((key, i) => {
    console.log("key,i", key, i);
    console.log(myMethodsList[i].References);
    if (myMethodsList[i].References.length) {
      let tmpRefs = myMethodsList[i].References.split(";");
      for (let x = 0; x < tmpRefs.length; x++) {
        allRefs.push(tmpRefs[x].replace("\n", "")); // Remove newlines from source
      }
    }
  });

  const counts = [];

  for (const num of allRefs) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  let references = <></>;

  references = Object.keys(counts.sort()).map((key, i) => {
    return <Paragraph className="hangingIndent">{key}</Paragraph>;
  });

  return (
    <div className="wrapper">
      <Typography>
        <Title>References</Title>

        <Paragraph>{references}</Paragraph>
      </Typography>
    </div>
  );
};

export default References;
