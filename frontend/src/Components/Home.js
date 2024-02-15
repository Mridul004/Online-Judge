import React from "react";
import "../App.css";

export default function Home() {
  return (
    <>
      <h2 className="tagline">
        Code, Compete, Conquer: Your Path to Programming Mastery
      </h2>

      <div className="baseline"></div>

      <div className="Card">
        <div className="box1">
          <h1>Problem Set</h1>
          <br></br>
          <br></br>
          The problemset can be found at this{" "}
          <a href="/problems/all" style={{ display: "contents" }}>
            link
          </a>
          .
        </div>
        <div className="box1">
          <h1>Contests</h1>
          <br></br>
          <br></br>
          No contests at the moment.
        </div>
        <div className="box1">
          <h1>Learn</h1>
          <br></br>
          <br></br>

          <ul style={{ paddingTop: "3vh", paddingLeft: "0.2vh" }}>
            <li>
              <a href="http://cp-algorithms.com">cp-algorithms.com</a>
            </li>
            <li>
              <a href="https://blog.shahjalalshohag.com/topic-list/">
                The Ultimate Topic List
              </a>
            </li>
          </ul>
        </div>
        <div className="box1">
          <h1>References</h1>
        </div>
      </div>
      <div className="Card"></div>
    </>
  );
}
