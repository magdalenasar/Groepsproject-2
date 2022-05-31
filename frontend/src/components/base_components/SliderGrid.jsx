import { useAxios } from "../../data/hooks";

const SliderGrid = (props) => {
  const [favorites, loading, error] = useAxios(
    "https://wdev2.be/fs_tijl/groepswerk2/api/favorites"
  );

  const { className, className2 } = props;
  return (
    <>
      {favorites.length > 0 &&
        favorites.map(({ usr_act_id, title, image }) => (
          <Link to="/categoryview">
            <div className={className} key={usr_act_id}>
              <div className={className2}>
                <img href={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </div>
          </Link>
        ))}
    </>
  );
};

export default SliderGrid;
