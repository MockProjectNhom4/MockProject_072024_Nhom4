import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SIGNUP_PATH } from "../../../contants/routers";
import Notification from "../library/notification";

const backgroundImageUrl = "../../BackLogin.png";
const logo = "../../../logo.png";
const logoGg = "../../../google_PNG19635.png";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(""); // Đổi email thành login
  const [PASSWORD, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isShow, setIsshow] = useState(false);
  const [title, setTitle] = useState("");
  const [messenger, setMessenger] = useState("");
  const [status, setStatus] = useState(false);

  const handleNavigation = (url) => {
    navigate(url);
  };
  
  const setNotify = (title, message, status, isShow) => {
    setTitle(title);
    setMessenger(message);
    setStatus(status);
    setIsshow(isShow);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login, PASSWORD);
    setError(""); // Reset thông báo lỗi trước khi gửi yêu cầu
    if (!login || !PASSWORD) {
      setNotify(
        "Login failed!",
        "Please enter both login and password.",
        false,
        true
      );
      return;
    }
    try {
      const response = await axios.post(
        "https://intern-server-8n7t.onrender.com/api/login",
        { login, PASSWORD } 
      );

      if (response.data.token) {
        setNotify(
          "Đăng nhập thành công",
          "Vui lòng chờ vài giây...",
          true,
          true
        );
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", true);

        // Chuyển hướng đến trang dựa trên Roleid
        navigate(response.data.redirectUrl);
      } else {
        setNotify("Login failed", "Invalid credentials", false, true);
      }
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setNotify("Login failed", error.response.data.message, false, true);
      } else {
        setNotify("Login failed", "Please try again.", false, true);
      }
      console.error("Login failed:", error);
    }
  };

  return (
    <div
      className={styles.loginContainer}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className={styles.containerLeft}>
        <div className={styles.containerLoginLabel}>
          <div className={styles.lableTop}>
            <div
              className={styles.logo}
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
          </div>
          <div className={styles.labelBot}>
            <div className={styles.containerText}>
              <h2>Welcome Back 👋</h2>
              <p>
                Today is a new day. It's your day. You shape it. Sign in to
                start managing your projects.
              </p>
            </div>
            <div className={styles.containerInput}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formField}>
                  <span>User name</span>
                  <input
                    type="text" // Thay đổi loại trường nhập nếu cần
                    placeholder="User name"
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
                  <a href="#" className={styles.forgotPasswordLink}>
                    Forgot Password?
                  </a>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Sign in
                </button>
              </form>
              {error && <div className={styles.errorMessage}>{error}</div>} 
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
                <span>
                  You don't have an account?
                  <a onClick={() => handleNavigation(SIGNUP_PATH)}>Sign Up</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerRight}></div>
      <Notification
        title={title}
        messenger={messenger}
        status={status}
        isShow={isShow}
        setIsshow={setIsshow}
      />
    </div>
  );
};

export default Login;
