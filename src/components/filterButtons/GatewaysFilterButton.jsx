import React, {useContext} from 'react';
import {DataContext} from "../../ContextApi/DataContext";
import './fiterButtons.css';

const GatewaysFilterButton = ({label}) => {
    const { allData, setSelectedProjectOrGateway } = useContext(DataContext);
    const {gateways } = allData;

    const selectGateway = (id) => {
        let selectedGateway = gateways.filter(item => item.id === id)[0];
        setSelectedProjectOrGateway([selectedGateway]);
    }

    const selectAllGateways = () => {
        setSelectedProjectOrGateway(gateways);
    }

    if (!gateways.length ) {
        return 'Loading....';
    }
    return (
        <div className="dropdown">
            <button disabled className='filterButton'>
                {label}
            </button>
            <div className="dropdown-content">
                <a onClick={selectAllGateways} href="#">All Gateways</a>

                {gateways.map(item => (
                    <div key={item.id}>
                        <a onClick={() => selectGateway(item.id)} href="#">{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GatewaysFilterButton;