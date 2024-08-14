// src/components/Login/Login.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Signup.module.css';
import { SIGNIN_PATH } from '../../contants/routers';
const backgroundImageUrl = '../../BackLogin.png';
const logo = '../../../logo.png'
const logoGg = '../../../google_PNG19635.png'

const Signup = () => {
    const navigate = useNavigate();
    const handleNavigation = (url) => {
        navigate(url);
      };
    return (
        <div className={styles.loginContainer} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className={styles.containerLeft}>
                <div className={styles.containerLoginLabel}>
                    <div className={styles.lableTop}>
                        <div className={styles.logo} style={{ backgroundImage: `url(${logo})` }}>
                        </div>

                    </div>
                    <div className={styles.labelBot}>
                        <div className={styles.containerText}>
                            <h2>
                                Welcome👋
                            </h2>
                            

                        </div>
                        <div className={styles.containerInput}>
                            <form>
                                <div className={styles.formField_1}>
                                    <div className={styles.formField}>
                                        <span>First Name</span> <input type="text" placeholder="First Name" className={styles.inputField} />
                                    </div>
                                    
                                    <div className={styles.formField}>
                                        <span>Last Name</span> <input type="text" placeholder="Last Name" className={styles.inputField} />
                                    </div>
                                </div>
                                <div className={styles.formField}>
                                    <span>Email</span> <input type="email" placeholder="Email" className={styles.inputField} />
                                </div>
                                <div className={styles.formField}>
                                    <span>Phone Number</span> <input type="phone" placeholder="Phone" className={styles.inputField} />
                                </div>
                                <div className={styles.formField}>
                                    <span>Password</span>
                                    <input type="password" placeholder="Password" className={styles.inputField} />
                                </div>


                                <button type="submit" className={styles.submitButton}>Sign Up</button>
                            </form>
                            <div className={styles.loginOthers}>
                                <div className={styles.or}>
                                    <span />
                                    <p>
                                        Or
                                    </p>
                                    <span />
                                </div>
                                <div className={styles.othersItem}>
                                    <button type="" className={styles.anotherItemButton}> <span style={{ backgroundImage: `url(${logoGg})` }}></span> <p>Sign in with Google</p></button>
                                </div>

                            </div>
                            <div className={styles.dontAccount}>
                                <span>Do you already have an account?
                                    <a onClick={() => handleNavigation(SIGNIN_PATH)}>Sign In</a>
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={styles.containerRight}>

            </div>
        </div>
    );
};

export default Signup;
