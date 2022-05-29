import Title from "../base_components/Title"
import Chips from "../combined_components/Chips"

const About = props => {
  const { className } = props;

  return (
    <>
       <Title>Contact us</Title>
      <div className="contact">
        <div className="contact-form">
          <form>      
            <input className="name feedback-input half" type="text" placeholder="Name" />
            <input className="email feedback-input half" type="text" placeholder="Email" />
            <textarea className="text feedback-input " placeholder="Message"></textarea>
            <input type="submit" value="Send message"/>
          </form>
        </div>
        <div className="contact-team">
        <Chips/>
        </div>
      </div>
    </>
  )
};

export default About;

