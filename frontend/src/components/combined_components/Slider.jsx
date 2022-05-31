import Title from "../base_components/Title";
import Grid from "../base_components/Grid";

const Slider = (props) => {
  const { className, children } = props;
  return (
    <div className={className}>
      <Title className="slider_title">{children}</Title>
      <SliderGrid className="slider_row" />
    </div>
  );
};

export default Slider;
