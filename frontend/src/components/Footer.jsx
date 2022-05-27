import Paragraph from "./base_components/Paragraph";

const Footer = props => {
  const { className } = props;
  return (
    <footer className={className}>
      <Paragraph><a href="https://github.com/magdalenasar/Groepsproject-2">Made with ♥️ at SYNTRA</a> |  &copy; 2022 - All rights reserved</Paragraph>
    </footer>
  );
};

export default Footer;
