import { useGetActivityByIdQuery } from "../../data/activityApi";
import Paragraph from "../base_components/Paragraph";
import { useState } from "react";

const Activity = ({ id }) => {
  const { data, isLoading, isError } = useGetActivityByIdQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect:true,
  });


  return (
    <div>    
        {isLoading && <p>Loading...</p>}
        {isError && <p>An error occured..</p>} 
        {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>} 

        {/* {
          data && (
            <ul>
              {data.activities?.map((activity) => (
                <div key={act_id}>
                  <li><h3 className='title'>{activity.activity}</h3></li>
                  <li>{availability}</li>
                  <li>{partipicipants}</li>
                  <li>{accessibility}</li>
                  <li>{duration}</li>
                  <li>{kidFriendly}</li>
                  <li>{link}</li>
                </div>
              ))}
              </ul>
              )} */}
        <a href="/" className="randomize">Close</a>
    </div>
    );
  };

export default Activity;




{/* 
      {data.length > 0 && <ul> (
        
        data.map(({ act_id, activity, availability, type, partipicipants, accessibility, duration, kidFriendly, link }) => (
          <div className="flex-grid">
            <div className="col">
              <h2 className="act-title">{activity}</h2>
              <figcaption> Category: {type}</figcaption>
              <section className='card-body'>
                <>Availability: {availability}</>
                Partipicipants: {partipicipants}
                Accessibility:  {accessibility}
                Duration: {duration}
                Kid friendly factor:{kidFriendly}
                More: {link}
              </section>
            </div>
          </div>
          )
          </ul>
        )} 
      )} */}