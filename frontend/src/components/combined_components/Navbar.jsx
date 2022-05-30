import Button from "../base_components/Button";
import Img from "../base_components/Img";
import { Link } from "react-router-dom";

const Navbar = props => {
  const { className } = props;
  return (
    <>
      <div className={className}>
        <nav className="left">
          <Img className="img" src="/src/image/Logo.png" alt="Logo" />

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
        <nav className="right">
          <Button className="login_btn">
            <Link className="link" to="/login">
              Login |
            </Link>
          </Button>

          <Button className="register_btn">
            <Link className="link" to="/register">
              Register
            </Link>
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
