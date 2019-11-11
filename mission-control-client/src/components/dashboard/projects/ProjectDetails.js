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
    const { activeProjectStore: { active } } = props;
    console.log("Line 20: here is active: ", active);
    
    if(active) {
        return (
            <div>
                Details loaded
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
