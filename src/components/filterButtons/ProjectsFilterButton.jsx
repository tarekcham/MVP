import React, {useContext} from 'react';
import './fiterButtons.css';
import {DataContext} from "../../ContextApi/DataContext";

const ProjectsFilterButton = () => {
    const {allData, setSelectedProjectOrGateway} = useContext(DataContext);
    const {projects} = allData;

    const selectProject = (id) => {
        let selectedProject = projects.filter(item => item.id === id)[0];
        setSelectedProjectOrGateway([selectedProject]);
    }

    const selectAllProjects = () => {
        setSelectedProjectOrGateway(projects);
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
                <a onClick={selectAllProjects} href="#">All Projects</a>

                {projects.map(item => (
                    <div key={item.id}>
                        <a onClick={() => selectProject(item.id)} href="#">{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsFilterButton;

