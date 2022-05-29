const Button = props => {
  const { className, type, value, children, disabled } = props;
  return (
    <button className={className} type={type} value={value} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
