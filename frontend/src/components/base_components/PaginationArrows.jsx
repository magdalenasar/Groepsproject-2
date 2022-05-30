const PaginationArrows = props => {
  const { className, hrefL, hrefR } = props;
  return (
    <div className={className}>
      <a href={hrefL}>❮</a>
      <a href={hrefR}>❯</a>
    </div>
  );
};

export default PaginationArrows;
