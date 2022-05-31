import Title from "../base_components/Title";
import Chips from "../combined_components/Chips";

const About = props => {
  const { className } = props;

  return (
    <>
      <Title>Contact us</Title>
      <div className="contact">
        <div className="contact-form">
          <form>
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              className="name feedback-input half"
              type="text"
              placeholder="Your name here"
            />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="email feedback-input half"
              type="text"
              placeholder="Enter your mail"
            />
            <label htmlFor="message">
              <b>Message</b>
            </label>
            <textarea
              className="text feedback-input "
              placeholder="Write your message here..."
            ></textarea>
            <input type="submit" value="Send message" />
          </form>
        </div>
        <div className="contact-team">
          <Chips />
        </div>
      </div>
    </>
  );
};

export default About;
