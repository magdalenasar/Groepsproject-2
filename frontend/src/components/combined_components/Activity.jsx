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
              <h4>Title: {act_title}</h4>
              <h4>Summary: {act_activity}</h4>
              <h4>Category: {typ_name}</h4>
              <h4>Participants: {act_participants}</h4>
              <h4>Accessibility: {act_accessibility}</h4>
              <h4>Duration: {act_duration}</h4>
              <h4>Kidfriendly: {act_kidfriendly}</h4>
              <h4>More info: {act_link}</h4>
            </div>
          )
        )}
    </>
  );
};

export default Activity;
