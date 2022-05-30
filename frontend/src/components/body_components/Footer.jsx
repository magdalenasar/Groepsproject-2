import Paragraph from "../base_components/Paragraph";

const Footer = props => {
  const { className } = props;
  return (
    <footer className={className}>
      <Paragraph> <a href="https://github.com/magdalenasar/Groepsproject-2">GitHub Project Link</a>   | Magdalena | Steven | Tijl</Paragraph>
      <Paragraph> 2022 &copy; ALL RIGHTS RESERVED</Paragraph>
    </footer>
  );
};

export default Footer;
