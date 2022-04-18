import React from 'react';
import './mainBoard.css';
import ProjectsListContainer from "../projectsListContainer/ProjectsListContainer";
import FilterButtonsList from "../filterButtons/FilterButtonsList";
import MainBoardTitle from "./MainBoardTitle";
import Chart from "../chart/Chart";

const MainBoard = () => {

    return (
        <div className='mainBoard'>
            <div className='mainBoard__topSection'>
                <MainBoardTitle/>
                <FilterButtonsList/>
            </div>
            <div className='mainBoard__bottomSection'>
                <ProjectsListContainer/>
                <Chart/>
            </div>

        </div>
    );
};

export default MainBoard;