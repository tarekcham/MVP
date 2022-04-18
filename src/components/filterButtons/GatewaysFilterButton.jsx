import React, {useContext} from 'react';
import {DataContext} from "../../ContextApi/DataContext";
import './fiterButtons.css';

const GatewaysFilterButton = ({label}) => {
    const { allData } = useContext(DataContext);
    const {gateways} = allData;

    if (!gateways.length ) {
        return 'Loading....';
    }
    return (
        <div className="dropdown">
            <button disabled className='filterButton' >
                {label}
            </button>
            <div className="dropdown-content">
                {gateways.map(gateway => (
                    <div key={gateway.name}>
                        {/*<a href="#">{gateway.name}</a>*/}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GatewaysFilterButton;