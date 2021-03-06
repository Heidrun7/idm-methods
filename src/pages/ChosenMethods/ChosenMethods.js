import React, { useState, useEffect } from "react";
import ChosenMethod from "../../components/ChosenMethod/ChosenMethod";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "./ChosenMethods.css";
import myMethodsList from "../../files/myMethods.json";
// import AllMethodsTable from "../../components/AllMethodsTable/AllMethodsTable";

const ChosenMethods = () => {
  // const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  // Sort the methods by id
  const chosenMethodsList = myMethodsList.sort((a, b) =>
    a.Number > b.Number ? 1 : b.Number > a.Number ? -1 : 0
  );

  let tmpColumns = [];

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
    {
      title: "Rating",
      dataIndex: "Grade",
      key: "Rating",
      sorter: {
        compare: (a, b) => {
          return a.Grade - b.Grade;
        },
      },
    },
  ];

  useEffect(() => {
    let tmpData = [];

    Object.keys(chosenMethodsList).map((key, i) =>
      tmpData.push(chosenMethodsList[i])
    );
    setData(tmpData);
  }, []);

  useEffect(() => {}, [data]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="chosenMethodContainer">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        onChange={() => onChange()}
      />
    </div>
  );
};

export default ChosenMethods;
