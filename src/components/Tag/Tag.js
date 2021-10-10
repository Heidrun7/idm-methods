import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { Typography, Divider } from "antd";
// import "./Tag.css";

import myMethodsList from "../../files/myMethods.json";

const Tag = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { Title, Paragraph, Text } = Typography;

  let methodList = [];

  for (var i = 0; i < myMethodsList.length; i++) {
    console.log("LIST: ", myMethodsList[i]);
    let tmpTags = myMethodsList[i].Tags.split(";");
    for (var j = 0; j < tmpTags.length; j++) {
      if (tmpTags.includes(id)) {
        methodList.push(myMethodsList[i]);
      }
    }
  }

  var filteredArray = methodList.filter(function (item, pos) {
    return methodList.indexOf(item) == pos;
  });

  console.log("Method list: ", methodList);
  console.log("Method list: ", filteredArray);

  const columns = [
    {
      title: "Number",
      dataIndex: "Number",
      key: "Number",
      sorter: {
        compare: (a, b) => {
          return a.Number - b.Number;
        },
      },
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      render: (text, record) => (
        <Link
          to={{
            pathname: "/chosen-methods/" + record.Number,
          }}
        >
          <p className="link">{text}</p>
        </Link>
      ),
      sorter: {
        compare: (a, b) => {
          return a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0;
        },
      },
    },
  ];

  useEffect(() => {
    let tmpData = [];

    Object.keys(filteredArray).map((key, i) => tmpData.push(filteredArray[i]));
    setData(tmpData);
  }, []);

  useEffect(() => {}, [data]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        onChange={() => onChange()}
      />
    </div>
  );
};

export default Tag;
