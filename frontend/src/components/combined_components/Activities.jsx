import React from 'react'
import { useAxios } from "../../hooks/hooks";
import RandomIdea from "../combined_components/RandomIdea";
import Activity from './Activity';
import PaginationArrows from '../base_components/PaginationArrows';



const Activities = () => {

  const [activities, loading, error] = useAxios(
  "https://wdev2.be/fs_tijl/groepswerk2/api/activities"
  );
  
  return (
    <>
      <RandomIdea/>
      <h1 className='title'>List of fun activity ideas to explore: </h1>
      <div className="cards">
        {/* <Search></Search> */}
        {error && <p>ERROR</p>}
        {loading && <p>LOADING...</p>} 
        {activities.length > 0 && 
          activities.map(({ act_id }) => (
            <Activity id={act_id} />
          ))
        }
      </div>
      <PaginationArrows className="pagination" />
    </>
  )
}

export default Activities;
