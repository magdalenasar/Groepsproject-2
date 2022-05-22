import Title from "./Title";
import Grid from "./Grid";

const Gallery = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Title>Activity categories</Title>
      <Grid />
    </div>
  );
};

export default Gallery;
