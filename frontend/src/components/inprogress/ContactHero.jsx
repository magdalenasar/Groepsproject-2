import Title from "../base_components/Title"
import Chips from "../Chips"
import Button from "../base_components/Button"
  
const ContactHero = () => {

  return (
    <>
     <div className="contact">
        <div className="contact-form">
          <Title>Contact us</Title>
          <form action="">
                <input className="contact-form__half" type="text" name="name" placeholder="Name" required />
                <input className="contact-form__half" type="email" name="email" placeholder="Email" required />
                <input type="text" placeholder="Subject" name="subject" required/>
                <textarea name="message"  placeholder='Message' id="" cols="30" rows="10" required></textarea>
                <Button type='submit' className='contact-form__btn' value='Send'/>
          </form>
        </div>
        <div className="contact-team">
          <Chips />
        </div>
      </div>
    </>
  )
}

export default ContactHero