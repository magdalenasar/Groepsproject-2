import Button from "../base_components/Button";
import Img from "../base_components/Img";
import { Link } from "react-router-dom";

const Navbar = props => {
  const { className } = props;
  return (
    <>
      <div className={className}>
        <nav className="left">
          <Img className="img" src="/src/image/Logo.jpg" alt="Logo" />

          <Button className="home_btn">
            <Link className="link" to="/">
              Home
            </Link>
          </Button>
          <Button className="contact">
            <Link className="link" to="/about">
              About
            </Link>
          </Button>
        </nav>

        <Button className="login_register" onclick="openForm()">
          <Link className="link" to="/login_register">
            Login | Register
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Navbar;
