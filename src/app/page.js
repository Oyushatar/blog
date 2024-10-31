"use client";
import Go from "./companent";
import { useState } from "react";
import { useEffect } from "react";
import Parent from "@/mrParent";
const Page = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const [value, setValue] = useState("");
  const fetchData = async () => {
    const JSON = await fetch(
      `https://dev.to/api/articles?per_page=9&page=${num}`
    );
    const data2 = await JSON.json();
    setData(data2);
  };
  useEffect(() => {
    fetchData();
  }, [num]);
  const forward = () => {
    const hoho = num + 1;
    setNum(hoho);
  };
  const backward = () => {
    if (num == 1) {
    } else {
      const hehe = num - 1;
      setNum(hehe);
    }
  };

  return (
    <Parent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          flexWrap: "wrap",
        }}
      >
        <h1 className="header">All Blog Post</h1>
        <div className="container">
          {data.map((pass, index) => {
            {
              console.log("hi");
            }
            return <Go key={index} pass={pass} />;
          })}
        </div>
        <div className="hey">
          <button onClick={() => backward()} className="goPage">
            Prev page
          </button>
          <h1>{num}</h1>
          <button onClick={() => forward()} className="goPage">
            next Page
          </button>
        </div>
      </div>
    </Parent>
  );
};
export default Page;
