import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import {DataContext} from '../ContextApi/DataContext';
import {getGateways, getProjects, getReport, getUsers} from "../API/api";
import MainBoard from "./mainBoard/MainBoard";

const App = () => {
    const [selectedProjectOrGateway, setSelectedProjectOrGateway] = useState();
    const [allData, setAllData] = useState();
    const [filteredDate, setFilteredDate] = useState();

    useEffect(() => {
            try {
                Promise.all([getUsers(), getProjects(), getGateways(), getReport({})]).then(values => {
                    return Promise.all(values.map(r => r.json()));
                }).then(values => {
                        const refactoredProjects = values[1].data.map(item => {
                            return {name: item.name, id: item.projectId, itemType: 'project'}
                        });
                        const refactoredGateways = values[2].data.map(item => {
                            return {name: item.name, id: item.gatewayId, itemType: 'gateway'}
                        });

                        setSelectedProjectOrGateway(refactoredProjects)
                        setAllData({
                            users: values[0].data,
                            projects: refactoredProjects,
                            gateways: refactoredGateways,
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
            setSelectedProjectOrGateway: setSelectedProjectOrGateway,
            selectedProjectOrGateway: selectedProjectOrGateway,
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
