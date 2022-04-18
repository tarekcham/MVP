import React, {useContext} from 'react';
import './fiterButtons.css';
import {DataContext} from "../../ContextApi/DataContext";

const ProjectsFilterButton = () => {
    const {allData, setSelectedProject} = useContext(DataContext);
    const {projects} = allData;

    const selectProject = (id) => {
        const selectedProject = projects.filter(item => item.projectId === id)[0];
        setSelectedProject([selectedProject]);
    }

    const selectAllProject = () => {
        setSelectedProject(projects);
    }

    if (!projects.length) {
        return 'Loading....';
    }

    return (
        <div className="dropdown">
            <button disabled className='filterButton'>
                All Projects
            </button>
            <div className="dropdown-content">
                <a onClick={() => selectAllProject('item.projectId')} href="#">All Projects</a>

                {projects.map(item => (
                    <div key={item.projectId}>
                        <a onClick={() => selectProject(item.projectId)} href="#">{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsFilterButton;

