const Button = props => {
  const { className, type, value, children, disabled, onClick } = props;
  return (
    <button className={className} onClick={ onClick } type={type} value={value} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
