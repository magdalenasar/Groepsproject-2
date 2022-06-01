import { useAxios } from "../../hooks/hooks";
import { Link } from "react-router-dom";

const Grid = (props) => {
  const [categories, loading, error] = useAxios(
    "https://wdev2.be/fs_tijl/groepswerk2/api/categories"
  );

  const { className, className2 } = props;
  return (
    <>
      {categories.length > 0 &&
        categories.map(({ id, name, image }) => (
          <div className={className} key={id}>
            <div className={className2}>
              <Link to="/categoryview">
                <img src={`./src/image/${image}`} alt={name} />
                <h3>{name}</h3>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default Grid;
