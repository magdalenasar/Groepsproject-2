import Search from "./Search";
import Slider from "./inprogress/Slider";
import Gallery from "./inprogress/Gallery";

const Main = props => {
  const { className } = props;
  return (
    <main className={className}>
      <Search className="" />
      <Slider className="" />
      <Gallery className="" />
    </main>
  );
};

export default Main;
