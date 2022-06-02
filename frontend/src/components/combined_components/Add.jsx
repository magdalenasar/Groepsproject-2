import React from "react";
import RandomIdea from "../combined_components/RandomIdea";
import { Link } from "react-router-dom";

const Add = () => {
   return (
    <>
       <RandomIdea/>
       <h1 className='title'>Add some fun idea! </h1>
       <div className="add">
        <div className="add-form">
          <form
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
              name="title"
              id="title"
            />
            <label htmlFor="type">
              <b>Type</b>
            </label>
            <input
              className="email feedback-input half"
              type="text"
              placeholder="Type here (ex: education) "
              name="descr"
              id="desc"
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
            />
            <label htmlFor="participants">
              <b>Participants</b>
             </label>
               <input
              className="email feedback-input half"
              type="number"
              placeholder="Participants here"
              name="participants"
              id="participants"
            />


            <input type="submit" value="Send your idea" />
          </form>
        </div>
      </div>
    </>
   );
 };
export default Add;