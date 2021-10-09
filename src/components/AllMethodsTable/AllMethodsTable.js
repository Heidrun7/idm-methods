import React, { useState, useEffect } from "react";
import "./AllMethodsTable.css";

import { Table } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const AllMethodsTable = (props) => {
  const methods = props.methods;
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  console.log("The data is: ", methods);

  let tmpColumns = [];

  useEffect(() => {
    Object.keys(methods[0]).map((key, i) =>
      tmpColumns.push({
        title: Object.keys(methods[0])[i],
        dataIndex: Object.keys(methods[0])[i],
        render: (text) => {
          if (typeof text === "boolean") {
            if (text === true) {
              return <CheckCircleOutlined />;
            }
          } else {
            return String(text);
          }
        },
        sorter: {
          compare: (a, b) => {
            if (typeof a[Object.keys(methods[0])[i].toString()] === "string") {
              return (
                a[Object.keys(methods[0])[i].toString()].localeCompare() -
                b[Object.keys(methods[0])[i].toString()].localeCompare()
              );
            } else {
              return (
                a[Object.keys(methods[0])[i].toString()] -
                b[Object.keys(methods[0])[i].toString()]
              );
            }
          },
        },
      })
    );
    console.log("columns: ", tmpColumns);
    setColumns(tmpColumns);

    let tmpData = [];

    Object.keys(methods).map((key, i) => tmpData.push(methods[i]));
    console.log("data: ", tmpData);
    setData(tmpData);
  }, []);

  useEffect(() => {}, [columns, data]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="tableContainer">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        onChange={() => onChange()}
      />
    </div>
  );
};

export default AllMethodsTable;
