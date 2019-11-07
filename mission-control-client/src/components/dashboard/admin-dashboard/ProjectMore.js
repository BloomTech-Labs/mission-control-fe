import React, { useEffect } from "react";
import { setActiveProject } from "../../../actions/activeProductActions";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const ProjectMore = props => {
  const { id } = useParams();

  useEffect(() => {
    props.setActiveProject(id);
  }, []);

  return (
    <div className="admin-project-more-container">
      <div className="admin-project-more-overview">
        <h1 className="admin-project-more-overview-head">Overview</h1>
        {props.project && props.project.project.length > 0 && (
          <>
            <p>{props.project.project[0].product.name}</p>
            <p>{props.project.project[0].name}</p>
          </>
        )}
        {}
      </div>
      <div>
        <h1>Team</h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    project: state.activeProductStore.project,
    product: state.activeProductStore
  };
};

export default connect(
  mapStateToProps,
  { setActiveProject }
)(ProjectMore);
