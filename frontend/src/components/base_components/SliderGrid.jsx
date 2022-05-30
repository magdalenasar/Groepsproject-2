import { useAxios } from "../../data/hooks";

const sliderGrid = (props) => {
  const [categories, loading, error] = useAxios(
    "https://wdev2.be/fs_tijl/groepswerk2/api/categories"
  );

  const { className, className2 } = props;
  return (
    <>
      {categories.length > 0 &&
        categories.map(({ id, name, image }) => (
          <Link to="/categoryview">
            <div className={className} key={id}>
              <div className={className2}>
                <img href={image} alt={name} />
              </div>
              <h3>{name}</h3>
            </div>
          </Link>
        ))}
    </>
  );
};

export default Grid;
