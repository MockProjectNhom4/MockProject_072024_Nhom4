import React from 'react';
import styles from './AdminLayout.module.css';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
// import Content from './Content';

import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
