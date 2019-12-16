import React, { useEffect, useState } from "react";
import { setActiveProject } from "../../../actions/activeProductActions";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GitHubIcon from "@material-ui/icons/GitHub";
import { FaSlack } from "react-icons/fa";
import ProductList from "../products/ProductList";
import { productsU } from "../../../queries"; // brings in the data from the grapql query
import { useQuery } from "urql"; //comes default from urql

const useStyles = makeStyles({
  card: {
    width: "25%",
    maxWidth: "25%",
    display: "flex",
    margin: "3rem 3rem 3rem 0",
    padding: "1.5rem"
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
});

const ProjectMore = props => {
  const [results] = useQuery({ query: productsU });
  const { data, fetching, error } = results;

  const classes = useStyles();

  const { id } = useParams();

  const [programs, setPrograms] = useState([]);

  const { setActiveProject, project } = props;

  useEffect(() => {
    setActiveProject(id);
  }, [id, setActiveProject]);

  useEffect(() => {
    if (project) {
      const temp = [];
      project.people.forEach(el => {
        if (el.person.program) temp.push(el.person.program.toLowerCase());
      });
      setPrograms(temp);
    }
  }, [project]);
  // console.log("Props", props);

  if (fetching || !data) {
    return <h2>Loading...</h2>;
  }
  // console.log("DATA", data);
  return (
    <div className="more-page-container">
      {data && <ProductList products={data.products} />}

      <div className="admin-project-more-container">
        <div className="admin-project-more-overview">
          {project && project.project.length > 0 && (
            <>
              <div className="admin-project-more-overview-content">
                <p className="admin-project-more-overview-product">
                  {project.project[0].product.name}
                </p>
                <p className="admin-project-more-overview-project">
                  {project.project[0].name}
                </p>
                {new Date(project.project[0].end) > new Date() ? (
                  <p className="admin-project-more-overview-status">
                    In Progress
                  </p>
                ) : (
                  <p className="admin-project-more-overview-status">
                    Completed
                  </p>
                )}
                <div className="admin-project-more-overview-programs">
                  {programs.length ? (
                    [...new Set(programs)].map(
                      (el, i) =>
                        (el === "ux/ui" && (
                          <p
                            key={i}
                            className="product-program-avatar program-ux"
                          >
                            {el.toUpperCase()}
                          </p>
                        )) ||
                        (el === "ds" && (
                          <p
                            key={i}
                            className="product-program-avatar program-ds"
                          >
                            {el.toUpperCase()}
                          </p>
                        )) ||
                        (el === "web" && (
                          <p
                            key={i}
                            className="product-program-avatar program-web"
                          >
                            {el.toUpperCase()}
                          </p>
                        ))
                    )
                  ) : (
                    <p className="admin-project-more-null">
                      No programs specified on this project
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="team-container">
          <h1 className="admin-project-more-team-head">Team</h1>
          <div className="admin-project-more-team">
            {project && project.people.length > 0 ? (
              project.people.map((el, i) => (
                <Card className={classes.card} key={i}>
                  <CardContent className={classes.content}>
                    <p className="admin-project-more-team-name">
                      {`${el.person.firstname} ${el.person.lastname}`}
                    </p>
                    <p className="admin-project-more-team-email">
                      {el.person.email}
                    </p>
                    {el.person.githubId && (
                      <p className="admin-project-more-team-gh">
                        {<GitHubIcon style={{ marginRight: "0.5rem" }} />}{" "}
                        {el.person.githubId}
                      </p>
                    )}
                    <p className="admin-project-more-team-slack">
                      {<FaSlack style={{ marginRight: "0.5rem" }} />}{" "}
                      {el.person.slackId}
                    </p>
                    <p className="admin-project-more-team-timezone">
                      {el.person.timezone}
                    </p>
                    {el.person.program.toLowerCase() === "web" && (
                      <p className="product-program-avatar program-web">
                        {el.person.program}
                      </p>
                    )}
                    {el.person.program.toLowerCase() === "ds" && (
                      <p className="product-program-avatar program-ds">
                        {el.person.program}
                      </p>
                    )}
                    {el.person.program.toLowerCase() === "ux/ui" && (
                      <p className="product-program-avatar program-ux">
                        {el.person.program}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="admin-project-more-null">
                No team members on this project
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    project: state.activeProductStore.project
    // isLoading: state.activeProductStore.isLoading
    // productStore: state.productStore
  };
};

export default connect(mapStateToProps, { setActiveProject })(ProjectMore);
