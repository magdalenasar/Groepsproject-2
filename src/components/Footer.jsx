import Paragraph from "./Paragraph";

const Footer = props => {
  const { className } = props;
  return (
    <footer className={className}>
      <Paragraph>2022 | Magdalena | Steven | Tijl</Paragraph>
      <Paragraph>&copy; ALL RIGHTS RESERVED</Paragraph>
    </footer>
  );
};

export default Footer;
