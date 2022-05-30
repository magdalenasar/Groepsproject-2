import Slider from "../combined_components/Slider";
import Gallery from "../combined_components/Gallery";

const Home = props => {
  const { className } = props;
  return (
    <>
      <main className={className}>
        <Slider className="slider">What’s trending now</Slider>
        <Gallery className="gallery">Activity categories</Gallery>
      </main>
    </>
  );
};

export default Home;
