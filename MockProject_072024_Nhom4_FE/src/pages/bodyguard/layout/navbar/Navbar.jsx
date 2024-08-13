import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell, faUser, faBars} from '@fortawesome/free-solid-svg-icons'; 

import './Navbar.css'

export default function Navbar(){
    const [isMenuVisible, setIsMenuVisible] = useState(false); 
    const [colorMenu, setColorMenu] = useState('#FFFFFF');
    const handleMenuClick = () => {
        setIsMenuVisible(!isMenuVisible);
        setColorMenu(isMenuVisible ? '#FFFFFF' : '#FFAC41');
    };

    return(
        <div className="Nav">
            <div className="Logo">
                <img src='/public/logo.png' alt="logo.png" />
            </div>
            <div className="NavItem">
                <div className="TopNav">
                    <button id='bellIcon'><FontAwesomeIcon icon={faBell} /></button>
                    <button id='userIcon'><FontAwesomeIcon icon={faUser} /></button>
                    <button id='menuIcon' onClick={handleMenuClick} style={{ backgroundColor: colorMenu }}><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <div className="BottomNav">
                    {isMenuVisible && (
                    <div className="MenuItem">
                        <a href="#" className="ItemLink">Profile</a>
                        <a href="#" className="ItemLink">Training</a>
                        <a href="#" className="ItemLink">Schedule</a>
                        <a href="#" className="ItemLink">Requests</a>
                        <a href="#" className="ItemLink">Rate</a>
                        <a href="#" className="ItemLink">Time Keeping</a>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}