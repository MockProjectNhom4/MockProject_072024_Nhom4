import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { BODYGUARD_PROFILE_PATH } from '../../../../contants/routers';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [colorMenu, setColorMenu] = useState('#FFFFFF');
    const handleMenuClick = () => {
        setIsMenuVisible(!isMenuVisible);
        setColorMenu(isMenuVisible ? '#FFFFFF' : '#FFAC41');
    };

    return (
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
                            <Link to={BODYGUARD_PROFILE_PATH} className="ItemLink">Profile</Link>
                            <Link to="#" className="ItemLink">Training</Link>
                            <Link to="#" className="ItemLink">Schedule</Link>
                            <Link to="#" className="ItemLink">Requests</Link>
                            <Link to="#" className="ItemLink">Rate</Link>
                            <Link to="#" className="ItemLink">Time Keeping</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}