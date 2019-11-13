import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Project from "./Project";
import { connect } from "react-redux";
import { setActiveProject } from "../../../actions/activeProjectActions";

const ProjectList = props => {
  const [filtered, setFiltered] = useState({ projects: [] });

  useEffect(() => {
    if (props.projectStore.projectRoleByEmail.length) {
      setFiltered({ projects: props.projectStore.projectRoleByEmail });
      if (filtered.projects.length > 0) {
        props.setActiveProject(filtered.projects[0]);
      } else {
        props.setActiveProject(props.projectStore.projectRoleByEmail[0]);
      }
    }
  }, [props.projectStore.projectRoleByEmail]);

  const setProjectHandler = el => {
    props.setActiveProject(el);
  };

  const handleChange = e => {
    const projects = props.projectStore.projectRoleByEmail;
    const re = /^[a-z0-9\s]+$/i;

    if (
      e.target.value !== "" &&
      re.test(e.target.value) &&
      projects.length > 0
    ) {
      setFiltered({
        projects: projects.filter(item => {
          return (
            item.project.name
              .toLowerCase()
              .search(e.target.value.toLowerCase()) !== -1
          );
        })
      });
    } else if (!re.test(e.target.value) && e.target.value !== "") {
      setFiltered({ projects: [] });
    } else {
      setFiltered({ projects: projects });
    }
  };

  return (
    <div className="project-list-container">
      <div className="project-list-header">
        <p className="project-list-title">Projects</p>
      </div>
      <span className="user-project-search-wrapper">
        <SearchIcon fontSize="large" className="user-project-search-icon" />
        <input
          className="user-project-search"
          placeholder="Search here"
          onChange={handleChange}
        />
      </span>
      <div className="projects-scroll-container">
        {filtered.projects && filtered.projects.length ? (
          filtered.projects.map((el, i) => (
            <Project
              active={props.activeProjectStore.active}
              setActiveProject={setProjectHandler}
              key={i}
              el={el}
              i={el.project.id}
            />
          ))
        ) : (
          <p className="projects-no-projects">No projects</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeProjectStore: state.activeProjectStore,
    projectStore: state.projectStore
  };
};

export default connect(
  mapStateToProps,
  { setActiveProject }
)(ProjectList);
