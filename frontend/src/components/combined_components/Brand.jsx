const Brand = props => {
  const { h1child1, h1child2, h2child } = props;
  return (
    <div className="brand">
      <div className="brand_h2_h1">
        <h2 className="brand_h2">{h2child}</h2>
        <h1 className="brand_h1_1">{h1child1}</h1>
      </div>
      <h1 className="brand_h1_2">{h1child2}</h1>
    </div>
  );
};

export default Brand;
