import React from 'react';
import ProjectsFilterButton from "./ProjectsFilterButton";
import GatewaysFilterButton from "./GatewaysFilterButton";
import {getDates} from "../../utils/getDates";
import DateFilterButton from "./DateFilterButton";

const GATEWAY = 'Gateway';
export const FROM = 'From';
const TO = 'To';
const START_DAY = '2021-01-01';
const STOP_DAY = '2021-02-28';


const FilterButtonsList = () => {

    const datesList = getDates(START_DAY, STOP_DAY);
    return (
        <div className='filterButtonList'>
            {/* create generic component for all these buttons*/}

            <ProjectsFilterButton/>
            <GatewaysFilterButton label={GATEWAY}/>
            <DateFilterButton label={FROM} data={datesList}/>
            <DateFilterButton label={TO} data={datesList}/>
            <GatewaysFilterButton label='Generate Report'/>

        </div>
    );
};

export default FilterButtonsList;