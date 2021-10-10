import React, { useState, useEffect } from "react";
import { TagCloud } from "react-tagcloud";
import { Link } from "react-router-dom";
import "./Tags.css";
import myMethodsList from "../../files/myMethods.json";

const Tags = () => {
  let allTags = [];
  Object.keys(myMethodsList).map((key, i) => {
    if (myMethodsList[i].Tags.length) {
      let tmpTags = myMethodsList[i].Tags.split(";");
      for (let x = 0; x < tmpTags.length; x++) {
        allTags.push(tmpTags[x]);
      }
    }
  });

  const counts = {};

  for (const num of allTags) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let data = [];

  Object.keys(counts).map((key, i) => {
    data.push({
      value: (
        <Link
          className="tag"
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

  const navigate = (tag) => {};

  return (
    <div className="tagWrapper">
      <TagCloud
        minSize={30}
        maxSize={100}
        tags={data}
        onClick={(tag) => navigate(tag)}
      />
    </div>
  );
};

export default Tags;
