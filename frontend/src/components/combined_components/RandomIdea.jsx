import Activity from "./Activity";
import Button from '../base_components/Button';
import Title from '../base_components/Title';
import React from "react";
import { useState } from "react";
import { useAxios } from "../../hooks/hooks";


const RandomIdea = (props) => {
  const [randomActivityID, setRandomActivityID] = useState(null);
  const [data] = useAxios(`https://wdev2.be/fs_tijl/groepswerk2/api/activity/${randomActivityID}`);
  
  // let { activities } = useSelector(state => {
    //   console.log('State: ', state);
    //   return state.activities; 
    // });
    
  const handleClick = (event) => {
    // console.log("in onClick", event);
    event.preventDefault();
    const randomID = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    setRandomActivityID(randomID(1, 200));
  }

  return (
      <>
      <div className="random-activity">
        
        <Button className="randomize" onClick={handleClick}>Get a Random activity idea → </Button>

          <div className='random-activity__generated'>
            {randomActivityID !== null && <Title>Your random activity idea: </Title>}
            {randomActivityID && <Activity id={randomActivityID} />}
          </div>
        
        </div>  
      </>
  )
}

export default RandomIdea;