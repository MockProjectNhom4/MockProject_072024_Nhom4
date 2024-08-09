import { useNavigate } from "react-router-dom";
import style from "./navbar.module.css";
import { HOME_PATH, NEWS_PATH } from "../../../../../contants/routers";
export default function Navbar() {
  const navigate = useNavigate();
  const handleNavigation = (url) => {
    navigate(url);
  };
  return (
    <>
      <div className={style.navbar}>
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
            <li>services</li>
            <li>recruitment</li>
            <li>contact us</li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
