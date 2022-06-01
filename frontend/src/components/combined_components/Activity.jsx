import React from "react";
import { useGetActivityByIdQuery } from "../../data/activityApi";

const Activity = ({ id }) => {
  const { data, isLoading, isError } = useGetActivityByIdQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect:true,
  });

  // const activity = JSON.parse(data.activities[act_id]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured..</p>}
      {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}

      {/* {activities.length >0 && (
        <ul>
          {activities.map(({ id, activity, availability, partipicipants, accessibility, duration, kidFriendly, link }) => (
              <li key={id} ><h3 className='title'>{activity}</h3></li>
              <li>{ availability }</li>
              <li>{ partipicipants }</li>
              <li>{ accessibility }</li>
              <li>{ duration }</li>
              <li>{ kidFriendly }</li>
              <li>{ link  }</li>
          ))}
        </ul>
      )} */}
    </>
  );
};

export default Activity;