const Button = props => {
  const { className, type, value, children, onClick, disabled } = props;
  return (
    <button
      className={className}
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
