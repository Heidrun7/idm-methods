import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import "./ChosenMethod.css";
import { Typography, Divider } from "antd";

const ChosenMethod = (props) => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { id } = useParams();

  return (
    <div className="wrapper">
      <Typography>
        <Title>Introduction {id}</Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
      </Typography>
    </div>
  );
};

export default ChosenMethod;
