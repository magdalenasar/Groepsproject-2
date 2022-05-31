import React from 'react'
import Activity from "./Activity";
import Button from '../base_components/Button';

import { useState } from "react";
import { useAxios } from "../../data/hooks";
import Title from '../base_components/Title';


const Random = (props) => {
  const {className} = props;
  const [clicked, setClicked] = useState(false);
  const [randomActivityID, setRandomActivityID] = useState(null);

  const [data, loading, error] = useAxios(`https://wdev2.be/fs_tijl/groepswerk2/api/activity/${randomActivityID}`);


  
  const handleClick = (event) => {
    // console.log("in onClick", event);
    event.preventDefault();
    const randomID = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    setRandomActivityID(randomID(1, 200));
  }

  return (
      <>
      <div className="random-activity">
        
          <Button className="randomize" onClick={ handleClick }>Get a Random activity idea → </Button>
         
          <div className='random-activity__generated'>
            {randomActivityID !== null && <Title>Your random activity idea: </Title>}
            {randomActivityID && <Activity id={randomActivityID} />}
          </div>
        
        </div>  
      </>
  )
}

export default Random;