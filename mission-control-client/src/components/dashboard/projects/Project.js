import React from "react";

const Project = props => {
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
        <h3 className="project-title">{props.el && props.el.project.name}</h3>
        {new Date(props.el && props.el.project.end) > new Date() ? (
          <p className="project-status-completed">Completed</p>
        ) : (
          <p className="project-status-not-completed">Not Completed</p>
        )}
      </div>
      <div className="project-programs">
        {programs.map(
          (el, i) =>
            (el === "ux/ui" && (
              <p key={i} className="project-program-avatar program-ux">
                {el.toUpperCase()}
              </p>
            )) ||
            (el === "ds" && (
              <p key={i} className="project-program-avatar program-ds">
                {el.toUpperCase()}
              </p>
            )) ||
            (el === "web" && (
              <p key={i} className="project-program-avatar program-web">
                {el.toUpperCase()}
              </p>
            ))
        )}
      </div>
    </div>
  );
};

export default Project;
