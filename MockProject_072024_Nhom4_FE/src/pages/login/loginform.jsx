// src/components/Login/Login.jsx
import React from 'react';
import styles from './Login.module.css';
import { useNavigate } from "react-router-dom";
import { SIGNUP_PATH } from '../../contants/routers';
const backgroundImageUrl = '../../BackLogin.png';
const logo = '../../../logo.png'
const logoGg = '../../../google_PNG19635.png'

const Login = () => {
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
                                Welcome Back 👋
                            </h2>
                            <p>
                                Today is a new day. It's your day. You shape it.
                                Sign in to start managing your projects.
                            </p>

                        </div>
                        <div className={styles.containerInput}>
                            <form>
                                <div className={styles.formField}>
                                    <span>Email</span> <input type="email" placeholder="Email" className={styles.inputField} />
                                </div>
                                <div className={styles.formField}>
                                    <span>Password</span>
                                    <input type="password" placeholder="Password" className={styles.inputField} />
                                </div>
                                <div className={styles.formField}>
                                    <a href="#" className={styles.forgotPasswordLink}>Forgot Password?</a>
                                </div>
                                <button type="submit" className={styles.submitButton}>Sign in</button>
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
                                <span>You don't hanve account? 
                                    <a onClick={() => handleNavigation(SIGNUP_PATH)}>Sign Up</a>
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

export default Login;
