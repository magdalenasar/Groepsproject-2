import Title from "../base_components/Title";
import Search from "../base_components/Search";
import ActivityGrid from "../base_components/ActivityGrid";
import PaginationArrows from "../base_components/PaginationArrows";

const Categoryview = (props) => {
  const { className, children } = props;
  return (
    <div className={className}>
      <div className="gallery_heading">
        <Title className="gallery_title">{children}</Title>
        <Search className="gallery_search" value="" />
      </div>
      <ActivityGrid className="gallery_grid_3/6" />
      <PaginationArrows className="pagination" />
    </div>
  );
};

export default Categoryview;
