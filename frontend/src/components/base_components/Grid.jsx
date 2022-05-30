import { useAxios } from "../../data/hooks";

const Grid = (props) => {
  const [categories, loading, error] = useAxios(
    "https://wdev2.be/fs_tijl/groepswerk2/api/categories"
  );

  const { className } = props;
  return (
    <>
      {categories.length > 0 &&
        categories.map(({ id, name, image }) => (
          <div className={className} key={id}>
            <img href={image}></img>
            <h3>{name}</h3>
          </div>
        ))}
    </>
  );
};

export default Grid;
