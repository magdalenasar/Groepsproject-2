import Title from "../base_components/Title";
import SliderGrid from "../base_components/SliderGrid";

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
