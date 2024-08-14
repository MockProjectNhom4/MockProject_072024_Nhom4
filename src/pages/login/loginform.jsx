// src/components/Login/Login.jsx
import { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { SIGNUP_PATH } from '../../contants/routers';

const backgroundImageUrl = '../../BackLogin.png';
const logo = '../../../logo.png';
const logoGg = '../../../google_PNG19635.png';

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(''); 
    const [PASSWORD, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNavigation = (url) => {
        navigate(url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset thông báo lỗi trước khi gửi yêu cầu
        if (!login || !PASSWORD) {
            setError('Please enter both email and password.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/login', { login, PASSWORD });

            if (response.data.token) {
                // Lưu token vào localStorage
                localStorage.setItem('token', response.data.token);

                // Chuyển hướng đến trang dựa trên Roleid
                navigate(response.data.redirectUrl);
            } else {
                setError('Invalid credentials'); // Cập nhật thông báo lỗi nếu không có token
            }
        } catch (error) {
            // Kiểm tra lỗi từ phản hồi của server
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message); // Cập nhật thông báo lỗi từ server
            } else {
                setError('Login failed. Please try again.'); // Thông báo lỗi chung
            }
            console.error('Login failed:', error);
        }
    };

    return (
        <div className={styles.loginContainer} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className={styles.containerLeft}>
                <div className={styles.containerLoginLabel}>
                    <div className={styles.lableTop}>
                        <div className={styles.logo} style={{ backgroundImage: `url(${logo})` }}></div>
                    </div>
                    <div className={styles.labelBot}>
                        <div className={styles.containerText}>
                            <h2>Welcome Back 👋</h2>
                            <p>Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
                        </div>
                        <div className={styles.containerInput}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formField}>
                                    <span>Email or Username</span> 
                                    <input
                                        type="text"
                                        placeholder="Email or Username"
                                        className={styles.inputField}
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <span>Password</span>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={styles.inputField}
                                        value={PASSWORD}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <a href="#" className={styles.forgotPasswordLink}>Forgot Password?</a>
                                </div>
                                <button type="submit" className={styles.submitButton}>Sign in</button>
                            </form>
                            {error && <div className={styles.errorMessage}>{error}</div>} {/* Hiển thị thông báo lỗi */}
                            <div className={styles.loginOthers}>
                                <div className={styles.or}>
                                    <span />
                                    <p>Or</p>
                                    <span />
                                </div>
                                <div className={styles.othersItem}>
                                    <button type="button" className={styles.anotherItemButton}>
                                        <span style={{ backgroundImage: `url(${logoGg})` }}></span>
                                        <p>Sign in with Google</p>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.dontAccount}>
                                <span>You don't have an account? 
                                    <a onClick={() => handleNavigation(SIGNUP_PATH)}>Sign Up</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerRight}></div>
        </div>
    );
};

export default Login;
