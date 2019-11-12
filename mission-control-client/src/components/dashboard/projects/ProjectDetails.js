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
// developers

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

function ProjectDetails(props) {
    const { active } = props.activeProjectStore;
    const classes = useStyles();

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
            <Card
                className={classes.card}
            >
                <CardContent className={classes.content}>
                <h1>
                    Product Name: {project.product.name}
                </h1>
                <h2>Cohort: {project.name}</h2>
                <h3>{projectRoleOfUser}</h3>
                <p>Project start date: {startDate}</p>
                <p>Deadline: {endDate} </p>
                {
                    new Date(project.end) > new Date() 
                    ? <p>Completed</p>
                    : <p>In Progress</p>
                }
                </CardContent>
            </Card>       
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
