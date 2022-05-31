import Title from "../base_components/Title";
import SliderGrid from "./SliderGrid";

const Slider = props => {
  const { className, children } = props;

  return (
    <div className={className}>
      <Title className="slider_title">{children}</Title>
      <div className="slider_row">
        <SliderGrid className="slider_item" className2="imgholder" />
      </div>
    </div>
  );
};

export default Slider;
