import React from "react";
import { useGetActivityByIdQuery } from "../../data/activityApi";

const Activity = ({ id }) => {
  const { data, isLoading, isError } = useGetActivityByIdQuery(id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  // const activity = JSON.parse(data.activities[act_id]);

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
            <div className="activity_detail" key={act_id}>
              <h3>Title: {act_title}</h3>
              <h3>Summary: {act_activity}</h3>
              <h3>Category: {typ_name}</h3>
              <h3>Participants: {act_participants}</h3>
              <h3>Accessibility: {act_accessibility}</h3>
              <h3>Duration: {act_duration}</h3>
              <h3>Kidfriendly: {act_kidfriendly}</h3>
              <h3>More info: {act_link}</h3>
            </div>
          )
        )}
    </>
  );
};

export default Activity;
