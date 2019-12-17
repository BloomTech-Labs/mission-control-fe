import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GitHubIcon from "@material-ui/icons/GitHub";
import { FaSlack } from "react-icons/fa";
import { ProductContext } from '../../../context/ProductContext';

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

const ProjectMore = () => {
  // const [results] = useQuery({ query: productsU });
  // const { data, fetching, error } = results;

  const classes = useStyles();

  const { id } = useParams();

  const { productState, setSelectedProject} = useContext(ProductContext)

  useEffect(() => {
    setSelectedProject(id);
  }, [id, setSelectedProject]);


  if (!productState) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="more-page-container">
      <div className="admin-project-more-container">
        <div className="admin-project-more-overview">
          {productState.active && productState.active.projects.length > 0 && (
            <>
              <div className="admin-project-more-overview-content">
                <p className="admin-project-more-overview-product">
                  {productState.active.projects[0].name}
                </p>
                <p className="admin-project-more-overview-project">
                  {productState.active.projects[0].name}
                </p>
                {new Date(productState.active.projects[0].end) > new Date() ? (
                  <p className="admin-project-more-overview-status">
                    In Progress
                  </p>
                ) : (
                  <p className="admin-project-more-overview-status">
                    Completed
                  </p>
                )}
              </div>
            </>
          )}
        </div>
        <div className="team-container">
          <h1 className="admin-project-more-team-head">Team</h1>
          <div className="admin-project-more-team">
            {productState.project && productState.project.people.length > 0 ? (
              productState.project.people.map((el, i) => (
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

export default ProjectMore
