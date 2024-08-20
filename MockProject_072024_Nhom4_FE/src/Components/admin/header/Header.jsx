import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Your Logo</div>
            <div className={styles.companyName}>Your Company Name</div>
            <div className={styles.adminName}>Admin Name</div>
        </header>
    );
};

export default Header;
