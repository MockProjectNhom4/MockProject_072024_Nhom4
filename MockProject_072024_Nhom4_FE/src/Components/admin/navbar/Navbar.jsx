import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ADMIN_ACCOUNT,
  ADMIN_FEEDBACK_PATH,
  CONTRACT_ADMIN,
} from "../../../contants/routers";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [title, SetTitle] = useState()
  const categoryData = [
    { key: "equipment", title: "equipment", path: "/staff/equipment" },
    { key: "timekeeping", title: "timekeeping", path: "/staff/timekeeping" },
    { key: "service", title: "service", path: "/staff/service" },
    { key: "training", title: "training", path: "/staff/training" },
    { key: "employee", title: "employee", path: "/staff/employee" },
    { key: "contract", title: "contract", path: "/staff/contract" },
    { key: "request", title: "request", path: "/staff/request" },
    { key: "feedback", title: "feedback", path: "/staff/feedback" }
]

  const pathname = window.location.pathname; // Trả về "/admin/manageaccount"
  const segments = pathname.split('/'); // Tách đường dẫn thành các phần tử mảng
  const lastSegment = segments[segments.length - 1]; // Lấy phần cuối cùng của mảng
  console.log(lastSegment)
  const navigate = useNavigate();
  const handleNavigation = (url, title) => {
    navigate(url);
    SetTitle(title)
  };
  return (
    <nav className={styles.sidebar}>
      <ul>
      { lastSegment === 'staff' || lastSegment === title ?  categoryData.map((item) => {
            return (
                <li key={item.key} onClick={() => handleNavigation(item.path, item.title)}>
                    {item.title}
                  </li>    
            )
          }) : (
            <>
            <li onClick={() => handleNavigation("#")}>Dashboard</li>
            <li onClick={() => handleNavigation(ADMIN_ACCOUNT)}>Account Manage</li>
            <li onClick={() => handleNavigation(CONTRACT_ADMIN)}>
              Contract Manage
            </li>
            <li onClick={() => handleNavigation("#")}>Reports</li>
            </>
      )
    }
      </ul>
    </nav>
  );
};

export default Navbar;
