import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import { FaSlack } from "react-icons/fa";

const useStyles = makeStyles({
    card: {
      width: 300,
      maxWidth: 300,
      display: "flex",
      margin: "3rem"
    },
    content: {
      display: "flex",
      flexDirection: "column"
    }
  });  

const UsersTab = props => {
    const classes = useStyles();

    return (
        <div className='user-project-more-team'>
              {props.project && props.project.people.length > 0 ? (
                props.project.people.map((el, i) => (
                  <Card className={classes.card} key={i}>
                    <CardContent className={classes.content}>
                      <p className="user-project-more-team-name">
                        {`${el.person.firstname} ${el.person.lastname}`}
                      </p>
                      <p className="user-project-more-team-email">
                        {el.person.email}
                      </p>
                      {el.person.githubId && (
                        <p className="user-project-more-team-gh">
                          {<GitHubIcon style={{ marginRight: "0.5rem" }} />}{" "}
                          {el.person.githubId}
                        </p>
                      )}
                      <p className="user-project-more-team-slack">
                        {<FaSlack style={{ marginRight: "0.5rem" }} />}{" "}
                        {el.person.slackId}
                      </p>
                      <p className="user-project-more-team-timezone">
                        {el.person.timezone}
                      </p>
                      {el.person.program.toLowerCase() === "web" && (
                        <p className="project-program-avatar program-web">
                          {el.person.program}
                        </p>
                      )}
                      {el.person.program.toLowerCase() === "ds" && (
                        <p className="project-program-avatar program-ds">
                          {el.person.program}
                        </p>
                      )}
                      {el.person.program.toLowerCase() === "ux/ui" && (
                        <p className="project-program-avatar program-ux">
                          {el.person.program}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="user-project-more-null">
                  No team members on this project
                </p>
              )}
        </div>
    );
};

export default UsersTab;
