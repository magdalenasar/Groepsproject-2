import Button from "./base_components/Button";
import Img from "./base_components/Img";

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
