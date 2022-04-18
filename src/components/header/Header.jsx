import React, {useContext} from 'react';
import './header.css';
import logoIcon from '../../../public/logoIcon.svg'
import logoLinesIcon from '../../../public/logoLinesIcon.svg'
import {DataContext} from "../../ContextApi/DataContext";


const Header = () => {
    const {allData} = useContext(DataContext);
    const {users} = allData;

    return (
        <div className="header">
            <img alt='logo' className="header__logoIcon" src={logoIcon}/>
            <img alt='logo' className="header__logoIconLines" src={logoLinesIcon}/>
            <div className="header__loginContainer">
                <div className="header__loginIcon"/>
                {users && users.length && (
                    <p className='header__loginName'>{users[0].firstName + ' ' + users[0].lastName}</p>)}
            </div>

        </div>
    );
};

export default Header;