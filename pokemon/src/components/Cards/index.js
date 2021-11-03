import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

export default function Cards() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      console.log(result);
      setArr(result.data);
    });
  }, []);
  return (
    <div className="cards">
      <div className="inner">
        {arr.map((item) => {
          return <div className="card">{item.title}</div>
        })}
      </div>
    </div>
  );
}
