import React from "react";

const RandomButton = ({ isActive, clicked}) => {
  
  return (
    <div>
      <button onClick={ clicked }>
        { isActive ? "Get another idea" : "Get a Random activity idea →" }
      </button>
    </div>
  );
};

export default RandomButton;
