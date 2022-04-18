import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import {DataContext} from '../ContextApi/DataContext';
import {getGateways, getProjects, getReport, getUsers} from "../API/api";
import MainBoard from "./mainBoard/MainBoard";

const App = () => {
    const [selectedProject, setSelectedProject] = useState();
    const [allData, setAllData] = useState();
    const [filteredDate, setFilteredDate] = useState();

    useEffect(() => {
            try {
                Promise.all([getUsers(), getProjects(), getGateways(), getReport({})]).then(values => {
                    return Promise.all(values.map(r => r.json()));
                }).then(values => {
                        setSelectedProject(values[1].data)
                        setAllData({
                            users: values[0].data,
                            projects: values[1].data,
                            gateways: values[2].data,
                            reports: values[3].data
                        })
                    }
                )

            } catch (err) {
                //TODO show a nice error message to the user
                console.log('err');
            }
        }
        , [])

    if (!allData) {
        return 'Loading...'
    }
    return (
        <DataContext.Provider value={{
            allData: allData,
            setAllData: setAllData,
            setSelectedProject: setSelectedProject,
            selectedProject: selectedProject,
            setFilteredDate: setFilteredDate,
            filteredDate: filteredDate
        }}>

            <div>
                <Header/>
                <main className='app__main'>
                    <SideBar/>
                    <MainBoard/>
                </main>
            </div>
        </DataContext.Provider>
    );

}

export default App;
