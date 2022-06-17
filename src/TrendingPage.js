import React from "react";
import Cards from "./components/Cards";
import map from "lodash/map";
import range from "lodash/range";
const TrendingPage = () => {
  return (
    <div className="container-tp">
      <h1>#Trending Now</h1>
      <div
        className="slider"
        style={{ width: "100%", overflow: "auto", display: "flex" }}
      >
        {map(range(5), (_) => (
          <Cards className="crd" />
        ))}
      </div>
    </div>
  );
};

export default TrendingPage;
