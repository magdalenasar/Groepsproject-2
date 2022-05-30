import Title from "../base_components/Title";
import Grid from "../base_components/Grid";

const Slider = (props) => {
  const { className, children } = props;
  const [favorites, loading, error] = useAxios(
    "https://wdev2.be/fs_tijl/groepswerk2/api/favorites"
  );

  return (
    <div className={className}>
      <Title className="slider_title">{children}</Title>
      <Grid
        className="slider_row"
        className2="imgholder"
        favorites={favorites}
      />
    </div>
  );
};

export default Slider;
