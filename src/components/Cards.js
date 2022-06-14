import React from "react";
import MovieList from "./MovieList";

export default function Cards() {
  return (
    <>
      <div className="card-container">
        {MovieList.map((item) => {
          return (
            <div className="card">
              <div className="containers">
                <div className="container1">
                  <h2>
                    #{item.ranking} -<span className="title">{item.title}</span>{" "}
                    ({item.year})
                  </h2>
                </div>
                <img className="poster" src={item.img.src} alt={item.img.alt} />
              </div>
              <ul className="info">
                <li>Distributor : {item.distributor}</li>
                <li>
                  Box Office Collection :{" "}
                  <span className="amount">{item.amount}</span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
