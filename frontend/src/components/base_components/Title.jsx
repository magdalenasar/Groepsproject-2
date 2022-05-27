const Title = props => {
  const { children } = props;
  return (
    <>
      <h3 className="strikethrough-title">{children}</h3>
    </>
  );
};

export default Title;
