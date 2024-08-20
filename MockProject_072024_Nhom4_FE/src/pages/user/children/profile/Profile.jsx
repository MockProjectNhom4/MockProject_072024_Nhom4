import React from "react";
import styles from "./profile.module.css";
import { FaEdit, FaCamera } from "react-icons/fa"; // Add these imports for icons

const UserProfile = () => {
    const user = {
        name: "John Doe",
        address: "123 Main St, Springfield",
        email: "john.doe@example.com",
        phone: "+1 (555) 555-1234",
        accountType: "Premium",
        profilePicture: '../../../profile_pictute.png',
    };
    const users = localStorage.getItem('token');
    console.log(users);

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileDetails}>
                <h2 className={styles.name}>{user.name}</h2>
                <p className={styles.info}><strong>Address:</strong> {user.address}</p>
                <p className={styles.info}><strong>Email:</strong> {user.email}</p>
                <p className={styles.info}><strong>Phone:</strong> {user.phone}</p>
                <p className={styles.info}><strong>Account Type:</strong> {user.accountType}</p>
            </div>
            <div className={styles.profileImageContainer}>
                <div className={styles.profileImage}>
                    <img src={user.profilePicture} alt={`${user.name}'s profile`} />
                    <div className={styles.cameraIcon}>
                        <FaCamera />
                    </div>
                </div>
                <button className={styles.editButton}>
                    <FaEdit /> Edit Info
                </button>
            </div>
        </div>
    );
};

export default UserProfile;
