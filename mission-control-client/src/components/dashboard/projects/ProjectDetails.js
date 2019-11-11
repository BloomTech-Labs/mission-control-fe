import React from "react";
import {connect} from "react-redux";

// project name
// project start date
// project end date
// team lead
// section lead
// engineering manager
// ux manager
// developers
/*
    Received from GET:
    {
        
    }
*/
function ProjectDetails(props) {
    const { active } = props.activeProjectStore;
    
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

    console.log("user role: ", projectRoleOfUser);
    console.log("Line 33: here is people: ", people);
    console.log("Line 34: here is person: ", person);
    console.log("Line 35: here is role: ", role);
    console.log("Line 36: here is project: ", project);
        
        return (
            <div>
                <h1>Product Name: {project.product.name}</h1>
                <h2>Cohort: {project.name}</h2>
                <h3>{projectRoleOfUser}</h3>
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
