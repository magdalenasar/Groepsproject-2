import Title from "../base_components/Title";
import Search from "../base_components/Search";
import Grid from "../base_components/Grid";

const Gallery = props => {
  const { className, children } = props;
  return (
    <div className={className}>
      <div className="gallery_heading">
        <Title className="gallery_title">{children}</Title>
        <Search className="gallery_search" value="" />
      </div>
      <Grid className="gallery_grid" />
    </div>
  );
};

export default Gallery;