import React from 'react'
import Navbar from "../combined_components/Navbar";
import Brand from "../combined_components/Brand";

const Header = props => {
  const { className } = props;
  
  return (
    <>
    <header className={className}>
      <Navbar className="navbar" />
      <Brand
        className="brand"
        h1child1="Get"
        h1child2="inspired"
        h2child="Don't be bored "
      />
    </header>
    </>
  );
};

export default Header;