import Title from "../base_components/Title";
import Grid from "./Grid";

const Gallery = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Title className='strikethrough-title'>Activity categories</Title>
      <Grid />
    </div>
  );
};

export default Gallery;
