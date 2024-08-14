import { useLocation, useNavigate } from "react-router-dom";
import style from "./navbar.module.css";
import {
  HOME_PATH,
  NEWS_PATH,
  CONTACT,
  SIGNIN_PATH,
  SERVICE_PATH,
} from "../../../../../contants/routers";
import { useState } from "react";
import useClickOutside from "../../../../../hooks/useClickOutside";

const NAV_ACTION_ICONS = [
  { alt: "notification", src: "icon/Bell_fill.png" },
  { alt: "profile", src: "icon/Vector.png" },
  { alt: "menu", src: "icon/menu.png" },
];

export default function Navbar({ color }) {

  const navigate = useNavigate();
  const location = useLocation();
  const [activeCollapse, setActiveCollapse] = useState(null);
  // const { status } = location.state || {};
  const moreRef = useClickOutside(() => setActiveCollapse(null));
  const profileRef = useClickOutside(() => setActiveCollapse(null));
  const status = localStorage.getItem('isLoggedIn')
  const handleNavigation = (url) => {
    navigate(url);
  };

  const handleCollapseDown = (act) => {
    if (act === "more") {
      setActiveCollapse(activeCollapse === "more" ? null : "more");
    } else if (act === "profile") {
      setActiveCollapse(activeCollapse === "profile" ? null : "profile");
    }
  };

  const handleClearState = () => {
    localStorage.setItem('isLoggedIn', false);
    handleNavigation(SIGNIN_PATH)
  };

  return (
    <>
      <div className={style.navbar} style={{ backgroundColor: `${color}` }}>
        <div className={"col col-l-2"}>
          <div className={style.logo}>
            <img alt={"logo"} src={"logo.png"} />
          </div>
        </div>

        <div className={"col col-l-10"}>
          <ul className={style.navItem}>
            <li onClick={() => handleNavigation(HOME_PATH)}>home</li>
            <li onClick={() => handleNavigation(NEWS_PATH)}>news</li>

            <li>about us</li>
            <li onClick={() => handleNavigation(SERVICE_PATH)}>services</li>
            <li>recruitment</li>

            <li onClick={() => handleNavigation(CONTACT)}>contact us</li>
            <li
              style={
                status !== undefined
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <button onClick={() => handleNavigation(SIGNIN_PATH)}>
                Login
              </button>
            </li>
            {/* nav after login */}
            <li
              style={
                status === undefined
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <ul className={style.navAction}>
                <li>
                  <i>
                    <img alt="notification" src="icon/Bell_fill.png" />
                  </i>
                </li>
                <li onClick={() => handleCollapseDown("profile")}>
                  <i>
                    <img alt="profile" src="icon/Vector.png" />
                  </i>
                </li>
                <li onClick={() => handleCollapseDown("more")}>
                  <i>
                    <img alt="menu" src="icon/menu.png" />
                  </i>
                </li>
              </ul>
              {/* collapse profile */}
              <ul
                ref={profileRef}
                className={`${style.profileActCollapse} ${activeCollapse === "profile" ? style.active : ""
                  }`}
              >
                <li>Profile</li>
                <li onClick={handleClearState}>Log Out</li>
              </ul>

              {/* collapse more */}
              <ul
                ref={moreRef}
                className={`${style.moreActCollapse} ${activeCollapse === "more" ? style.active : ""
                  }`}
              >
                <li>Requests</li>
                <li>Contracts</li>
                <li>Historys</li>
                <li>Feedbacks</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
