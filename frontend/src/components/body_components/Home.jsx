import Slider from "../combined_components/Slider";
import Gallery from "../combined_components/Gallery";
import RandomIdea from "../combined_components/RandomIdea";

const Home = props => {
  const { className } = props;
  return (
    <>
      <main className={className}>
        <RandomIdea className="random"></RandomIdea>
        <Slider className="slider">What’s trending now</Slider>
        <Gallery className="gallery">Activity categories</Gallery>
      </main>
    </>
  );
};

export default Home;
