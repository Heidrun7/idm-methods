import React, { useState, useEffect } from "react";
import "./AllMethodsTable.css";

import { Table } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const AllMethodsTable = (props) => {
  const methods = props.methods;
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  let tmpColumns = [];

  useEffect(() => {
    Object.keys(methods[0]).map((key, i) =>
      tmpColumns.push({
        title: Object.keys(methods[0])[i],
        dataIndex: Object.keys(methods[0])[i],
        render: (text) => {
          if (typeof text === "boolean") {
            if (text === true) {
              return <CheckCircleOutlined style={{ color: "lightcoral" }} />;
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
    setColumns(tmpColumns);

    let tmpData = [];

    Object.keys(methods).map((key, i) => tmpData.push(methods[i]));
    setData(tmpData);
  }, []);

  useEffect(() => {}, [columns, data]);

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

export default AllMethodsTable;
