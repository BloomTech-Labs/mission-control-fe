import React, { useContext } from "react";
import DashboardProject from "../admin-dashboard/DashboardProject";
import { connect } from "react-redux";
import AddProject from "../projects/AddProject";
import { useQuery } from "urql";
import { projectRolesU } from "../../../queries";
// Context
import {ProductContext} from '../../../context/ProductContext'

const DashboardMetrics = props => {
  const [results] = useQuery({ query: projectRolesU });
  const { data, fetching, error } = results;
  // console.log("Props", props);
  const {productState} = useContext(ProductContext)
  return (
    <div className="admin-projects-container">
      <div className="admin-projects-head">
        <h1 className="admin-projects-title">Projects</h1>
        {productState.active && (
          <AddProject currId={productState.active} />
        )}
      </div>
      <div className="admin-projects-content-container">
        {productState.active &&
          props.products.map(product => {
            if (productState.active.id === product.id) {
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

        {productState.active &&
          productState.active.projects.length === 0 && (
            <p className="admin-projects-empty">No projects</p>
          )}
      </div>
    </div>
  );
};

//need to remove the need for this below if we arent using redux
// const mapStateToProps = state => {
//   return {
//     activeProductStore: state.activeProductStore
//   };
// };

export default DashboardMetrics
// export default connect(mapStateToProps)(DashboardMetrics);
