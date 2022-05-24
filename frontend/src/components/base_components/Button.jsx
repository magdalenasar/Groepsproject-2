const Button = props => {
  const { className, type, children, disabled } = props;
  return (
    <button className={className} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
