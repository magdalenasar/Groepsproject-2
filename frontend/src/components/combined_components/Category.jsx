import Slider from "./Slider";
import Categoryview from "../body_components/Categoryview";

const Category = props => {
  const { className } = props;
  return (
    <>
      <main className={className}>
        <Slider className="slider">What’s trending now</Slider>
        <Categoryview className="Catergory" />
      </main>
    </>
  );
};

export default Category;
