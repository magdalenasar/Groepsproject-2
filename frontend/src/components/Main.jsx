import Search from "./base_components/Search";
import Slider from "./inprogress/Slider";
import Gallery from "./inprogress/Gallery";
import Chips from "./Chips";
import ContactHero from "./inprogress/ContactHero";

const Main = props => {
  const { className } = props;
  return (
    <main className={className}>
      <Slider className="trending" />
      <Gallery className="categories" />
      <Search className="search" />
      <ContactHero className='contact'></ContactHero>
    </main>
  );
};

export default Main;
