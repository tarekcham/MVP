import React from 'react';
import './projectsListContainer.css';
import ProjectsList from "../projectsList/ProjectsList";

const ProjectsListContainer = () => {

    return (
        <div className='projectsList'>
            <p>All projects | All gateways</p>
            <ProjectsList/>
        </div>
    );
};

export default ProjectsListContainer;