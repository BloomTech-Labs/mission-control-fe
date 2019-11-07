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
    return (
        <div>
            {props.name}
        </div>      
    );
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {})(ProjectDetails);
