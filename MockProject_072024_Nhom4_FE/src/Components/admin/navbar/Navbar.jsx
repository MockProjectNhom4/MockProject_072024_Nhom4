import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ADMIN_ACCOUNT,
  CONTRACT_ADMIN,
} from "../../../contants/routers";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigation = (url) => {
    navigate(url);
  };
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li onClick={() => handleNavigation("#")}>Dashboard</li>
        <li onClick={() => handleNavigation(ADMIN_ACCOUNT)}>Account Manage</li>
        <li onClick={() => handleNavigation(CONTRACT_ADMIN)}>
          Contract Manage
        </li>
        <li onClick={() => handleNavigation("#")}>Reports</li>
      </ul>
    </nav>
  );
};

export default Navbar;
