import React from "react";
import "./References.css";
import { Typography } from "antd";
import myMethodsList from "../../files/myMethods.json";

const References = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  let allRefs = [];
  Object.keys(myMethodsList).map((key, i) => {
    if (myMethodsList[i].References.length) {
      let tmpRefs = myMethodsList[i].References.split(";");
      for (let x = 0; x < tmpRefs.length; x++) {
        allRefs.push(tmpRefs[x].replace("\n", "")); // Remove newlines from source
      }
    }
  });

  const sortedRefs = allRefs.sort(function (a, b) {
    return a.localeCompare(b);
  });

  let counts = [];

  for (const num of sortedRefs) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  let references = <></>;

  references = Object.keys(counts).map((key, i) => {
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
