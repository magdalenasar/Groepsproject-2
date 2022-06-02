import Title from "../base_components/Title";
import Chips from "../combined_components/Chips";

const About = props => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="contact">
        <div>
          <h1 className="title">Contact us</h1>
        </div>
        <div className="contact-form">
          <form
            method="POST"
            action="https://wdev2.be/fs_tijl/groepswerk2/api/mail"
          >
            <label for="name">
              <b>Name</b>
            </label>
            <input
              className="name feedback-input half"
              type="text"
              placeholder="Your name here"
              name="name"
              id="name"
            />
            <label for="email">
              <b>Email</b>
            </label>
            <input
              className="email feedback-input half"
              type="email"
              placeholder="Enter your mail"
              name="email"
              id="email"
            />
            <label for="message">
              <b>Message</b>
            </label>
            <textarea
              className="text feedback-input "
              placeholder="Write your message here..."
              name="message"
              id="message"
            ></textarea>
            <input type="submit" value="Send message" />
          </form>
        </div>
        <div className="contact-team">
          <Chips />
        </div>
      </div>
    </div>
  );
};

export default About;
