import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  BODYGUARD_PROFILE_PATH,
  BODYGUARD_TIME_KEEPING_PATH,
  BODYGUARD_TRAINING_SCHEDULE_PATH,
  BODYGUARD_WORKING_SCHEDULE_PATH,
} from "../../../contants/routers";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [colorMenu, setColorMenu] = useState("#FFFFFF");
  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
    setColorMenu(isMenuVisible ? "#FFFFFF" : "#FFAC41");
  };
  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <div className="Nav">
      <div className="Logo">
        <img src="/public/logo.png" alt="logo.png" />
      </div>
      <div className="NavItem">
        <div className="TopNav">
          <button id="bellIcon">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button
            onClick={() => handleNavigation(BODYGUARD_PROFILE_PATH)}
            id="userIcon"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button
            id="menuIcon"
            onClick={handleMenuClick}
            style={{ backgroundColor: colorMenu }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="BottomNav">
          {isMenuVisible && (
            <div className="MenuItem">
              <Link to={BODYGUARD_PROFILE_PATH} className="ItemLink">
                Profile
              </Link>
              <Link to={BODYGUARD_TRAINING_SCHEDULE_PATH} className="ItemLink">
                Training
              </Link>
              <Link to={BODYGUARD_WORKING_SCHEDULE_PATH} className="ItemLink">
                Schedule
              </Link>
              <Link to="#" className="ItemLink">
                Requests
              </Link>
              <Link to="#" className="ItemLink">
                Rate
              </Link>
              <Link to={BODYGUARD_TIME_KEEPING_PATH} className="ItemLink">
                Time Keeping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
