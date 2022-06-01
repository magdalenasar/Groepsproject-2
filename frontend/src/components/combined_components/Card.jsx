import React from "react";
import Img from "./base_components/Img";
import Paragraph from "./base_components/Paragraph";
import Button from "./base_components/Button";

const Card = ({act_id}) => {
  return (
    <>
      {isError && <p>An error occured..r</p>}
      {isLoading && <p>Loading...</p>}
      {activitiy &&
        activity.map(({ activity, availability, type, partipicipants, accessibility, duration, kidFriendly, link }) => (
          <div className="flex-grid">
            <div className="col">
              <h2 className="">{activity}</h2>
              <figure>
                <Img src={src} alt={activity} />
                <figcaption> Category: {type}</figcaption>
              </figure>
              <Paragraph className='card-body'>
                Availability: {availability}
                Partipicipants: {partipicipants}
                Accessibility:  {accessibility}
                Duration: {duration}
                Kid friendly factor:{kidFriendly}
                More: {link}
              </Paragraph>
            </div>
            <Button className="favorite">♥️</Button>
            <Button className="done">✔️</Button>
          </div>
        )
      )} 
    </>
  );
};
