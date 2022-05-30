import React from "react";

const Error404 = props => {
  const { className } = props;
  return (
    <div className={className}>
      <h1>Error 404! Page not found!</h1>
    </div>
  );
};

export default Error404;
