import Button from "./Button";
const Search = props => {
  const { className, name, value } = props;
  return (
    <div className="search_container">
      <input
        className={className}
        type="search"
        name={name}
        placeholder="Search....."
        value={value}
      />
      <Button className="search_btn" type="submit">
        Search
      </Button>
    </div>
  );
};

export default Search;
