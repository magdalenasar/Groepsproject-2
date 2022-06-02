import { useAxios } from "../../hooks/hooks";
import { Link } from "react-router-dom";

const SliderGrid = props => {
  const [favorites, loading, error] = useAxios(
    "https://wdev2.be/fs_tijl/groepswerk2/api/favorites"
  );

  const { className, className2 } = props;
  return (
    <>
      {favorites.length > 0 &&
        favorites.map(({ usr_act_id, title, image }) => (
          <div className={className} key={usr_act_id}>
            <div className={className2}>
              <Link to="/activity_detail">
                <img src={`./src/image/${image}`} alt={title} />
                <h3>{title}</h3>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default SliderGrid;
