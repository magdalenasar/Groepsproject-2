const Paragraph = props => {
  const { className, children } = props;
  return <p className={className}>{children}</p>;
};

export default Paragraph;
