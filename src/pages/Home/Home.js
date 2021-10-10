import React, { useState, useEffect } from "react";
import "./Home.css";
import { Typography, Divider } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <div className="wrapper">
      <Title>About the Toolbox</Title>
      <Paragraph>
        The Toolbox is a place to gather design methods. It contains methods
        that I have used, find interesting or can imagine using in the future.
        The toolbox is heavily based on the book{" "}
        <a href=" https://books.google.se/books/about/Universal_Methods_of_Design_Expanded_and.html?id=BYTPDwAAQBAJ&source=kp_book_description&redir_esc=y">
          Universal Methods of Design Expanded and Revised
        </a>{" "}
        by Bruce Hanington and Bella Martin.
      </Paragraph>
      <Paragraph>
        <Link
          style={{ color: "lightCoral" }}
          to={{
            pathname: "/chosen-methods/",
          }}
        >
          Chosen methods
        </Link>{" "}
        which is the methods chosen to describe in detail, the description
        includes input, output, what it does, how it works, my experience as
        well as my rating of the method and tags that give a clue to what the
        method is about.
      </Paragraph>
      <Paragraph>
        <Link
          style={{ color: "lightCoral" }}
          to={{
            pathname: "/all-methods/",
          }}
        >
          All methods
        </Link>{" "}
        is a table of all the 125 methods described in Hanington and Martin’s
        book, which can be sorted according to the number, name, or phase they
        belong to.
      </Paragraph>
      <Paragraph>
        <Link
          style={{ color: "lightCoral" }}
          to={{
            pathname: "/tags/",
          }}
        >
          Tags
        </Link>{" "}
        refers to the current categories listed for each chosen method, shown in
        a word cloud where larger font size indicates that a tag appears more
        often than a tag using a smaller font. Each tag is clickable which leads
        to a page that lists all the connected chosen methods.
      </Paragraph>
      <Paragraph>
        Finally, all{" "}
        <Link
          style={{ color: "lightCoral" }}
          to={{
            pathname: "/references/",
          }}
        >
          references
        </Link>{" "}
        used for the descriptions of the chosen methods are listed.
      </Paragraph>
      <Paragraph>
        It is easy to add, remove and modify the methods on the page. They are
        all contained in a JSON file located within the page’s source directory
        and this JSON file can be edited. Alternatively, I have an Excel file
        containing the same information that can be downloaded as a CSV file
        which can then be converted to JSON. The table functionality on the
        webpage makes it easy to search, browse, compare, sort and share the
        methods in the Toolbox.
      </Paragraph>
      {/* <Divider />
      <Paragraph>
        <Text italic>-Heiðrún Valdís Heiðarsdóttir</Text>
      </Paragraph> */}
    </div>
  );
};

export default Home;
