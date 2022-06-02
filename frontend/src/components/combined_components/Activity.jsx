import React from "react";
import { useGetActivityByIdQuery } from "../../data/activityApi";

const Activity = ({ id }) => {
  const { data, isLoading, isError } = useGetActivityByIdQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occured..</p>}
      {data &&
        data.map(
          ({
            act_id,
            act_title,
            act_activity,
            typ_name,
            act_participants,
            act_accessibility,
            act_duration,
            act_kidfriendly,
            act_link,
          }) => (
            <div className="activity_detail card" key={act_id}>
              <h2>{act_title}</h2>
              <br />
              <hr/>
              <figcaption>{act_activity}</figcaption>
              <pre>Category: {typ_name}</pre>
              <p>Participants: {act_participants}</p>
              <p>Accessibility: {act_accessibility}</p>
              <p>Duration: {act_duration}</p>
              <p>Kidfriendly factor: {act_kidfriendly}</p>
              <p>More info: {act_link} </p>
              <div className="edit-delete">
                <a>edit</a>
                <a>delete</a>
              </div>
            </div>
          )
        )}
    </>
  );
};

export default Activity;
