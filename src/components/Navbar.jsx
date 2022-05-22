import Button from "./Button";
import Img from "./Img";

const Navbar = props => {
  const { className } = props;
  return (
    <>
      <div className={className}>
        <div className="left">
          <Img className="img" src="/src/image/Logo.jpg" alt="Logo" />
          <Button className="home">Home</Button>
          <Button className="contact">Contact</Button>
        </div>

        <Button className="login_register">Login | Register</Button>
      </div>
    </>
  );
};

export default Navbar;
