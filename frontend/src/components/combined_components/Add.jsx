import React from "react";
import RandomIdea from "../combined_components/RandomIdea";
import { useState } from "react";
import { usePostActivityMutation } from "../../data/activityApi";

const Add = () => {

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [participants, setParticipants] = useState("");

  const [postActivity] = usePostActivityMutation();

   return (
    <>
       <RandomIdea/>
       <h1 className='title'>Add some fun idea! </h1>
       <div className="add">
        <div className="add-form">
           <form
             onSubmit={e => {
               e.preventDefault();
               postActivity(title, type, activity, duration, participants);
               setTitle('');
               setType('');
             }}
            method="POST"
            action="https://wdev2.be/fs_tijl/groepswerk2/api/activities"
          >
            <label htmlFor="title">
              <b>Title</b>
            </label>
            <input
              className="name feedback-input half"
              type="text"
               placeholder="Title here"
               value={title}
               name="title"
               id="title"
               onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="type">
              <b>Type</b>
            </label>
            <input
              className="email feedback-input half"
              type="text"
              placeholder="Type here (ex: education) "
              name="activity"
              id="activity"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="activity">
              <b>Activity description</b>
             </label>
               <input
              className="email feedback-input half"
              type="text"
              placeholder="Write some description ..."
              name="activity"
               id="activity"
               value={activity}
                onChange={(e) => setActivity(e.target.value)}
            />
            <label htmlFor="duration">
              <b>Duration</b>
             </label>
               <input
              className="email feedback-input half"
              type="text"
              placeholder="Duration here (ex: 1 hour)"
              name="duration"
               id="duration"
               value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
            <label htmlFor="participants">
              <b>Participants</b>
             </label>
               <input
              className="email feedback-input half"
               type="number"
               value={participants}
              placeholder="Participants here"
              name="participants"
               id="participants"
                onChange={(e) => setParticipants(e.target.value)}
            />
             <input type="submit" value="Send your idea" />
          </form>
        </div>
      </div>
    </>
   );
 };
export default Add;