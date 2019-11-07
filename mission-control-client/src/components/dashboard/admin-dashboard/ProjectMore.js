import React, { useEffect, useState } from "react";
import { setActiveProject } from "../../../actions/activeProductActions";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const ProjectMore = props => {
  const { id } = useParams();

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    props.setActiveProject(id);
  }, []);

  useEffect(() => {
    if (props.project) {
      console.log(props.project);
      props.project.people.map(el => {
        if (el.person.program) {
          return setPrograms([...programs, el.person.program.toLowerCase()]);
        }
      });
    }
  }, [props.project]);

  return (
    <div className="admin-project-more-container">
      <div className="admin-project-more-overview">
        <h1 className="admin-project-more-overview-head">Overview</h1>
        {props.project && props.project.project.length > 0 && (
          <>
            <p>{props.project.project[0].product.name}</p>
            <p>{props.project.project[0].name}</p>
            {new Date(props.project.project[0].end) > new Date() ? (
              <p>In Progress</p>
            ) : (
              <p>Completed</p>
            )}
            {programs.length ? (
              [...new Set(programs)].map(
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
              )
            ) : (
              <p>No programs specified on this project</p>
            )}
          </>
        )}
      </div>
      <div>
        <h1>Team</h1>
        {props.project &&
          props.project.people.length > 0 ?
          props.project.people.map(el => (
            <>
              <p>{el.person.email}</p>
              <p>
                {el.person.firstname} {el.person.lastname}
              </p>
              <p>{el.person.githubId}</p>
              <p>{el.person.program}</p>
              <p>{el.person.slackId}</p>
              <p>{el.person.timezone}</p>
            </>
          )) : <p>No team members on this project</p>}
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
