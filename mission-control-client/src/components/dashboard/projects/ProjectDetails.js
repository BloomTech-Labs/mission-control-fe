import React from "react";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// project name
// project start date
// project end date
// team lead
// section lead
// engineering manager
// ux manager

const useStyles = makeStyles({
    card: {
        width: "90%",
        display: "flex",
        margin: "3rem"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        fontSize: "1.6rem"
    }
});

function ProjectDetails(props) {
    const { active } = props.activeProjectStore;
    const classes = useStyles();

    const styles = {
        headers: {
            fontSize: "2.4rem",
            marginBottom: "1rem"
        }
    };

    if(active) {
        const { 
            people, 
            project: {
                person,
                role,
                project // should be changed to projectDetails
            }
        } = active;
        const projectRoleOfUser = `${person.firstname} ${person.lastname}'s ${role.type}: ${role.name}`; // should be camel-cased
        const startDate = new Date(project.start).toString().substring(0, 15);
        const endDate = new Date(project.end).toString().substring(0, 15);
        
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <Card
                    className={classes.card}
                >
                    <CardContent className={classes.content}>
                        <h1 style={styles.headers}>
                            {project.product.name}
                        </h1>
                        <h3>{projectRoleOfUser}</h3>
                        <p>Project start date: {startDate}</p>
                        <p>Deadline: {endDate} </p>
                        {
                            new Date(project.end) < new Date() 
                            ? <p style={{fontWeight: "bold"}}>Completed</p>
                            : <p style={{fontWeight: "bold"}}>Not Completed</p>
                        }
                    </CardContent>
                </Card>       
            </div>
        );
    }
    
    if(!active) {
        return (
            <div>
                There are no project details to display.
            </div>        
        );
    }
}

function mapStateToProps(state) {
    return {
        activeProjectStore: state.activeProjectStore
    };
}

export default connect(mapStateToProps, null)(ProjectDetails);
