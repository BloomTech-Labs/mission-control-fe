import React from "react";

const Bad = () => {
  return (
    <div className="bad-container">
      <p data-testid="bad" className="bad-header">404</p>
      <p className="bad-desc">This page does not exist</p>
    </div>
  );
};

export default Bad;
