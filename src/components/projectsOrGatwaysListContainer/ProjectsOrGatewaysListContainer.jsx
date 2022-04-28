import React from 'react';
import './ProjectsOrGatewaysListContainer.css';
import ProjectsOrGatewaysList from "../ProjectsOrGatewaysList/ProjectsOrGatewaysList";

const ProjectsOrGatewaysListContainer = () => {

    return (
        <div className='projectsList'>
            <p>All projects | All gateways</p>
            <ProjectsOrGatewaysList/>
        </div>
    );
};

export default ProjectsOrGatewaysListContainer;