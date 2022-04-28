import React, {useContext, useState} from 'react';
import {DataContext} from "../../ContextApi/DataContext";
import './fiterButtons.css';
import {getReport} from "../../API/api";
import {FROM} from "./FilterButtonsList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const START_DATE = '01.01.2021';


const DateFilterButton = ({label, data}) => {


    const {setFilteredDate, filteredDate, setAllData, allData} = useContext(DataContext);
    const [selectedDate, setSelectedDate] = useState(new Date(START_DATE));

    const fetchReportData = async (date) => {
        const newReports = await getReport(date);
        return await newReports.json();
    }


    const handleSelectDate = async (day) => {
        setSelectedDate(new Date(day))
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
                <DatePicker selected={selectedDate} onChange={(date) => handleSelectDate(date)} />
            </div>
        </div>
    );
};

export default DateFilterButton;