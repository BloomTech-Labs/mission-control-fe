import React, { useState } from "react";
import DashboardProject from "../admin-dashboard/DashboardProject";
import { connect } from "react-redux";
import AddProject from "../projects/AddProject";
import { useQuery } from "urql";
import { projectRolesU } from "../../../queries";

const DashboardMetrics = props => {
  const [results] = useQuery({ query: projectRolesU });
  const { data, fetching, error } = results;

  // console.log("DATA",data);
  //need to set what is the active product
  // const [active, setActive]=useState({});

  console.log("Props from dashmetrics", props);
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
              return product.projects.map((el, i) => (
                <DashboardProject
                  product={product}
                  key={i}
                  el={el}
                  projects={data}
                />
              ));
            }
            {
              /* {
              props.products.map(product => {
                return props.
              })
            } */
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

const mapStateToProps = state => {
  return {
    activeProductStore: state.activeProductStore
  };
};

export default connect(mapStateToProps, null)(DashboardMetrics);
