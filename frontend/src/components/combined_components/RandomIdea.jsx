import React from "react";
import Activity from "./Activity";
import Button from "../base_components/Button";
import Title from "../base_components/Title";

import { useState } from "react";
import { useAxios } from "./../../hooks/hooks";

const RandomIdea = () => {
  const [randomActivityID, setRandomActivityID] = useState(null);
  const [data, loading, error] = useAxios(
    `https://wdev2.be/fs_tijl/groepswerk2/api/activity/${randomActivityID}`
  );

  const handleClick = (event) => {
    event.preventDefault();
    const randomID = (min, max) =>
      Math.floor(Math.random() * (max - min)) + min;
    setRandomActivityID(randomID(1, 200));
  };

  return (
    <>
      <div className="random-activity">
        <Button className="randomize" onClick={handleClick}>
          { randomActivityID == null ? 'Get a Random activity idea →' : "Get another one"}
        </Button>

        <div className="random-activity__generated">
          {randomActivityID !== null && (
            <h2 className="random-answer title">Your random activity idea is:</h2>
            
          )}
          {randomActivityID && <Activity id={randomActivityID} />}
          {randomActivityID !== null  &&( <a href="/" className="randomize">Close</a>)}
        </div> 
      </div>
    </>
  );
};

export default RandomIdea;
