import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import myMethodsList from "../../files/myMethods.json";
import "./ChosenMethod.css";
import { Typography, Divider } from "antd";

const ChosenMethod = (props) => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { id } = useParams();

  let method = 0;

  console.log("mymehtods: ", myMethodsList);
  for (var i = 0; i < myMethodsList.length; i++) {
    if (myMethodsList[i].Number == id) {
      method = myMethodsList[i];
      break;
    }
  }
  console.log("Chosen method: ", method.Name);

  let references = <></>//method.References.split("\n");

  if (method.References.length) {
    references = method.References.split(";").map((data, index) => {
      console.log("data,index: ", data, index);
      return <Paragraph>{data}</Paragraph>;
    });
  }

  let tags = <></>//method.References.split("\n");
  console.log("TAGS: ", method.Tags.split(";"))

  if (method.Tags) {
    tags = method.Tags.split(";").map((data, index) => {
      return <Link className="tags">{data}</Link>;
    });
  }

  return (
    <div className="wrapper">
      <Typography>
        <Title>
          Method {id}: {method.Name}
        </Title>
        <Title level={2}>Rating: {method.Grade}</Title>
        <Title level={2}>Input</Title>
        <Paragraph>{method.Input}</Paragraph>
        <Title level={2}>Output</Title>
        <Paragraph>{method.Output}</Paragraph>
        <Title level={2}>What it does</Title>
        <Paragraph>{method.["What it does"]}</Paragraph>
        <Title level={2}>How it works</Title>
        <Paragraph>{method.["How it works"]}</Paragraph>
        <Title level={2}>Experience</Title>
        <Paragraph>{method.Experience}</Paragraph>
        <Title level={2}>References</Title>
        <Paragraph>{references}</Paragraph>
        <Title level={2}>Tags</Title>
        <Paragraph>{tags}</Paragraph>
      </Typography>
    </div>
  );
};

export default ChosenMethod;
