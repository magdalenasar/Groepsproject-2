import Search from "../base_components/Search";
import Grid from "../base_components/Grid";

const Userview = props => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="gallery_heading">
        <Search className="gallery_search" value="" />
      </div>
      <Grid className="gallery_grid_3/6" />
    </div>
  );
};

export default Userview;
