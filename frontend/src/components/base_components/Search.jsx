const Search = props => {
  const { className, name } = props;
  return (
    <input
      className={className}
      type="search"
      name={name}
      placeholder="Search"
    />
  );
};

export default Search;
