import React, { useState, useEffect } from "react";
import { TagCloud } from "react-tagcloud";
import { Link } from "react-router-dom";
// import ReactWordcloud from "react-wordcloud";
// import "./Tags.css";
import myMethodsList from "../../files/myMethods.json";

const Tags = () => {
  let allTags = [];
  console.log("myMethods: ", myMethodsList);
  Object.keys(myMethodsList).map((key, i) => {
    console.log("key,i", key, i);
    console.log(myMethodsList[i].Tags);
    if (myMethodsList[i].Tags.length) {
      let tmpTags = myMethodsList[i].Tags.split(";");
      for (let x = 0; x < tmpTags.length; x++) {
        allTags.push(tmpTags[x]);
      }
    }
    console.log("allTags: ", allTags);
    //   tmpData.push(methods[i]));
  });

  //   var filteredArray = allTags.filter(function (item, pos) {
  //     return allTags.indexOf(item) == pos;
  //   });

  //   console.log("Filtered: ", filteredArray);

  const counts = {};

  for (const num of allTags) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  console.log("counts: ", counts);

  let data = [];

  Object.keys(counts).map((key, i) => {
    console.log(key, counts[key]);
    data.push({
      value: (
        <Link
          style={{ color: "lightCoral" }}
          to={{
            pathname: "/tags/" + key,
          }}
        >
          {key}
        </Link>
      ),
      count: counts[key],
    });
  });

  const data2 = [
    { value: "JavaScript", count: 38 },
    { value: "React", count: 30 },
    { value: "Nodejs", count: 28 },
    { value: "Express.js", count: 25 },
    { value: "HTML5", count: 33 },
    { value: "MongoDB", count: 18 },
    { value: "CSS3", count: 20 },
  ];

  const navigate = (tag) => {};

  return (
    <div className="tagWrapper">
      <TagCloud
        minSize={30}
        maxSize={100}
        tags={data}
        // style={{ width: 350 }}
        onClick={(tag) => navigate(tag)}
      />
    </div>
  );
};

export default Tags;
