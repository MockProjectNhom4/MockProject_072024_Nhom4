import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell, faUser, faBars} from '@fortawesome/free-solid-svg-icons'; 


export default function Navbar(){
    return(
        <div className="Nav">
            <div className="Logo">
                <img src='/public/logo.png' alt="logo.png" />
            </div>
            <div className="NavItem">
                <button id='bellIcon'><FontAwesomeIcon icon={faBell} /></button>
                <button id='userIcon'><FontAwesomeIcon icon={faUser} /></button>
                <button id='menuIcon'><FontAwesomeIcon icon={faBars} /></button>
            </div>
        </div>
    )
}