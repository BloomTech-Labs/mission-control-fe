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
    console.log(el);
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
    <div className="product-list-container">
      <div className="product-list-header">
        <p className="product-list-title">Projects</p>
      </div>
      <span className="admin-product-search-wrapper">
        <SearchIcon fontSize="large" className="admin-product-search-icon" />
        <input
          className="admin-product-search"
          placeholder="Search here"
          onChange={handleChange}
        />
      </span>
      <div className="products-scroll-container">
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
          <p className="products-no-products">No projects</p>
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
