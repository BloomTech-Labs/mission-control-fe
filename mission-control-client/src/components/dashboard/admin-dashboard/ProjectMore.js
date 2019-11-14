import React, { useEffect, useState } from "react";
import { setActiveProject } from "../../../actions/activeProductActions";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ClipLoader from "react-spinners/ClipLoader";
import CardContent from "@material-ui/core/CardContent";
import GitHubIcon from "@material-ui/icons/GitHub";
import { FaSlack } from "react-icons/fa";
import ProductList from '../products/ProductList'
import { getProducts } from '../../../actions/productActions';

const useStyles = makeStyles({
  card: {
    width: '25%',
    maxWidth: '25%',
    display: "flex",
    margin: "3rem 3rem 3rem 0",
    padding:'1.5rem'
  },
  content: {
    width:"100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
});

const ProjectMore = props => {
  const classes = useStyles();

  const { id } = useParams();

  const [programs, setPrograms] = useState([]);

  const { setActiveProject, 
          getProducts, 
          project, 
          productStore, 
          isLoading
        } = props

  useEffect(() => {
    setActiveProject(id);
    getProducts(); 
  }, []);

  useEffect(() => {
    if (project) {
      const temp = [];
      project.people.map(el => {
        if (el.person.program) temp.push(el.person.program.toLowerCase());
      });
      setPrograms(temp);
    }
  }, [project]);

  return (
    <div className = 'more-page-container'>
    <ProductList products={productStore.products} />
    {isLoading ? (
      <div className="admin-project-more-loader"><ClipLoader /></div>
      ) : (
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
          <div className = 'team-container'>
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
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    project: state.activeProductStore.project,
    isLoading: state.activeProductStore.isLoading,
    productStore: state.productStore,
  };
};

export default connect(
  mapStateToProps,
  { setActiveProject, getProducts }
)(ProjectMore);
