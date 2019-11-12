import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const DashboardBanner = props => {
  console.log(props);

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    if (props.activeProjectStore.active) {
      const temp = [];
      props.activeProjectStore.active.people.map(el => {
        if (el.person.program) {
          temp.push(el.person.program.toLowerCase());
        }
      });
      setPrograms(temp);
    }
  }, [props.activeProjectStore]);

  return (
    <div className="dashboard-banner-container">
      <div className="dashboard-banner-head">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>
            {props.activeProjectStore.active
              ? props.activeProjectStore.active.project.project.name
              : "Loading..."}
          </p>
          <p style={{ fontSize: "2rem", marginTop: "1rem" }}>
            {props.activeProjectStore.active &&
              props.activeProjectStore.active.project.project.product.name}
          </p>
        </div>
        <div className="dashboard-product-project-programs">
          {[...new Set(programs)].map(
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
        <div className="dashboard-product-status">
          {props.activeProjectStore.active &&
          new Date(props.activeProjectStore.active.project.project.end) <
            new Date() ? (
            <p className="product-status-completed">Completed</p>
          ) : (
            <p className="product-status-not-completed">Not Completed</p>
          )}
        </div>
      </div>
      <div className="dashboard-product-projects"></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeProjectStore: state.activeProjectStore
  };
};

export default connect(
  mapStateToProps,
  {}
)(DashboardBanner);
