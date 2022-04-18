import React, {useContext} from 'react';
import {DataContext} from "../../ContextApi/DataContext";
import './fiterButtons.css';
import {getReport} from "../../API/api";
import {FROM} from "./FilterButtonsList";


const DateFilterButton = ({label, data}) => {
    const {setFilteredDate, filteredDate, setAllData, allData} = useContext(DataContext);

    const fetchReportData = async (date) => {
        const newReports = await getReport(date);
        return await newReports.json();
    }

    const handleSelectDate = async (day, label) => {
        let date;
        if (label === FROM) {
            date = {...filteredDate, from: day};
            setFilteredDate(date);
        } else {
            date = {...filteredDate, to: day};
            setFilteredDate(date)
        }
        try {
            const newReports = await fetchReportData(date);
            setAllData({...allData, reports: newReports.data});
        } catch (err) {
            console.log("err", err);
        }
    }

    if (!data.length) {
        return 'Loading....';
    }

    return (
        <div className="dropdown">
            <button disabled className='filterButton'>
                {label} Date
            </button>
            <div className="dropdown-content">
                {data.map(day => (
                    <div key={day} onClick={() => handleSelectDate(day, label)}>
                        <a href="#">{day}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DateFilterButton;