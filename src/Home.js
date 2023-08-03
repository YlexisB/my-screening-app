import React from "react";
import constants from "./constants.js";

const Home = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1>
          Junior Web Designer (Remote)
          <br /> Interview Questions
        </h1>
        <h2>Candidate:Ylexis Butler</h2>
      </div>
      <div className="grid-row">
        {constants.map((questions, index) => {
          return (
            <div className={`grid-item ${questions.color}`}>
              <h1>{index}</h1>
              <h3>{questions.question}</h3>
              <textarea>{questions.answer}</textarea>
            </div>
          );
        })}
        <div className="grid-item beige"></div>
        <div className="grid-item white">
          <div className="thanks">
            <h1>Thank</h1>
          </div>
        </div>
        <div className="grid-item white">
          <div className="thanks">
            <h1>You!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
