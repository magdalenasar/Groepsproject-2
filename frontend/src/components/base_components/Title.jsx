const Title = props => {
  const { children, className } = props;
  return (
    <>
      <h3 className={className}>{children}</h3>
    </>
  );
};

export default Title;
