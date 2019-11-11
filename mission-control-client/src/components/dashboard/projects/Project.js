import React from "react";

const Project = props => {

  console.log(props)

  return (
    <div
      onClick={() => props.setActiveProject(props.el)}
      id={
        props.active && props.active.project.project.id === props.i
          ? "product-active" : 'active-project'
      }
      className="product-container"
    >
      <div className="product-description">
        <h3 style={{marginBottom: "2rem"}} className="product-title">{props.el && props.el.project.product.name}</h3>
        {new Date(props.el && props.el.project.end) > new Date() ? (
          <p className="product-status-completed">Completed</p>
        ) : (
          <p className="product-status-not-completed">Not Completed</p>
        )}
      </div>
    </div>
  );
};

export default Project;
