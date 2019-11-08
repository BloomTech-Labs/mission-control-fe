import React from "react";

const Project = props => {
  const programs = ["web", "ux/ui", "ds"];

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
        <h3 className="product-title">{props.active && props.active.project.project.name}</h3>
        {new Date(props.active && props.active.project.project.end) > new Date() ? (
          <p className="product-status-completed">Completed</p>
        ) : (
          <p className="product-status-not-completed">Not Completed</p>
        )}
      </div>
      <div className="product-programs">
        {programs.map(
          (el, i) =>
            (el === "ux/ui" && (
              <p key={i} className="product-program-avatar program-ux">
                {el.toUpperCase()}
              </p>
            )) ||
            (el === "ds" && (
              <p key={i} className="product-program-avatar program-ds">
                {el.toUpperCase()}
              </p>
            )) ||
            (el === "web" && (
              <p key={i} className="product-program-avatar program-web">
                {el.toUpperCase()}
              </p>
            ))
        )}
      </div>
    </div>
  );
};

export default Project;
