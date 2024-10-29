"use client";
import Parent from "@/mrParent";
import { useAmp } from "next/amp";
import { useState } from "react";
const Post = () => {
  const [inputValue, setInputvalue] = useState("");
  const [inputValue3, setInputvalue3] = useState("");
  const [truth, setTruth] = useState(false);
  const [false2, setFalse2] = useState(false);
  const test = () => {
    inputValue === "" ? setTruth(false) : setTruth(true);
    inputValue3 === "" ? setFalse2(false) : setFalse2(true);
  };
  return (
    <Parent>
      <div className="mm">
        <input
          value={inputValue}
          className="title2"
          placeholder="put the title..."
          onChange={(e) => setInputvalue(e.target.value)}
        />
        {truth ? null : (
          <div className="alert">Please fill the description!!</div>
        )}
        <input
          value={inputValue3}
          className="description"
          placeholder="put the description..."
          onChange={(e) => setInputvalue3(e.target.value)}
        />
        {false2 ? null : (
          <div className="alert">Please fill the description!!</div>
        )}
        <button
          onClick={() => test()}
          className="btn"
          style={{ width: "40vw", marginTop: "12px", height: "8vh" }}
        >
          Done
        </button>
      </div>
    </Parent>
  );
};
export default Post;
