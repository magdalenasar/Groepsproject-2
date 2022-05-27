import Title from "../base_components/Title";
import Row from "./Row";

const Slider = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Title>What’s trending now</Title>
      <Row />
    </div>
  );
};

export default Slider;
