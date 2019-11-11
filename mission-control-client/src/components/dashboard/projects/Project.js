import React from "react";

const Project = props => {
  console.log(props);
  const programs = ["web", "ux/ui", "ds"];

  return (
    <div
      onClick={() => props.setActiveProject(props.el)}
      id={
        props.active && props.active.project.project.id === props.i
          ? "project-active" : 'active-project'
      }
      className="project-container"
    >
      <div className="project-description">
        <h3 className="project-title">{props.el.project.name}</h3>
      </div>
    </div>
  );
};

export default Project;
