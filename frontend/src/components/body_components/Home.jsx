import Slider from "../combined_components/Slider";
import Gallery from "../combined_components/Gallery";
import Random from "../combined_components/Random";

const Home = props => {
  const { className } = props;
  return (
    <>
      <main className={className}>
        <Random className="random"></Random>
        <Slider className="slider">What’s trending now</Slider>
        <Gallery className="gallery">Activity categories</Gallery>
      </main>
    </>
  );
};

export default Home;
