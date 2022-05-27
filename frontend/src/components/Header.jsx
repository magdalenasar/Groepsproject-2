import Navbar from "./Navbar";
import Brand from "./Brand";
import Button from "./base_components/Button";

const Header = props => {
  const { className } = props;
  return (
    <header className={className}>
      <Navbar className="navbar" />
      <Brand
        className="brand"
        h2child="Don't be bored"
        h1child1="GET"
        h1child2="INSPIRED"
      />
      <Button className="random">Get a Random activity idea → </Button>
    </header>
  );
};

export default Header;
