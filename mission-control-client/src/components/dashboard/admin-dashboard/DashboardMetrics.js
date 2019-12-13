import React from "react";
import DashboardProject from "../admin-dashboard/DashboardProject";
import { connect } from "react-redux";
import AddProject from "../projects/AddProject";
import { useQuery } from "urql";
import { projectRolesU } from "../../../queries";

const DashboardMetrics = props => {
  const [results] = useQuery({ query: projectRolesU });
  const { data, fetching, error } = results;
  // console.log("Props", props);
  return (
    <div className="admin-projects-container">
      <div className="admin-projects-head">
        <h1 className="admin-projects-title">Projects</h1>
        {props.activeProductStore.active && (
          <AddProject currId={props.activeProductStore.active} />
        )}
      </div>
      <div className="admin-projects-content-container">
        {props.activeProductStore.active &&
          props.products.map(product => {
            if (props.activeProductStore.active.id === product.id) {
              const sortedProjects = product.projects.sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase())? 1:-1)
              return sortedProjects.map((el, i) => (
                <DashboardProject
                  product={product}
                  key={i}
                  el={el}
                  projects={data}
                />
              ));
            }
          })}

        {props.activeProductStore.active &&
          props.activeProductStore.active.projects.length === 0 && (
            <p className="admin-projects-empty">No projects</p>
          )}
      </div>
    </div>
  );
};

//need to remove the need for this below if we arent using redux
const mapStateToProps = state => {
  return {
    activeProductStore: state.activeProductStore
  };
};

export default connect(mapStateToProps)(DashboardMetrics);
