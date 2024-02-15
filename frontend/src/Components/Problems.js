import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

export default function Problems() {
  const [problemArr, setProblems] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3000/problem/all");
      setTimeout(() => {
        setProblems(res.data);
      }, 1000);
      //console.log(problemArr);
    })();
  }, []);

  const handleClick = async (id) => {
    navigate("/problem/" + id, { replace: true });
  };

  return (
    <>
      <h1 className="heading">PROBLEM SET</h1>
      <div className="header_underline"></div>

      <div className="header_underline"></div>
      {problemArr ? (
        <div className="row justify-content-center">
          <div className="table">
            <table className="t">
              <thead className="border-bottom">
                <tr>
                  <th className="h5 text-center">Index</th>
                  <th className="h5 text-center">Problem</th>
                  <th className="h5 text-center">Rating</th>
                  <th className="h5 text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                <>
                  {problemArr.map((problem, idx) => (
                    <tr
                      key={idx}
                      onClick={() => handleClick(problem[idx].id)}
                      role="button"
                    >
                      <td className="text-center">{idx + 1}</td>
                      <td className="text-center" style={{ color: "blue" }}>
                        {problem[idx].name}
                      </td>
                      <td className="text-center">{problem[idx].difficulty}</td>
                      <td className="problem-status">{"AC"}</td>
                    </tr>
                  ))}
                </>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="loader_div">
          <Circles
            height="40"
            width="40"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
}
