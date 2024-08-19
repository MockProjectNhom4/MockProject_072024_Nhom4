import { FaCheckCircle } from 'react-icons/fa';
// import { Spinner } from 'react-bootstrap';
import { faCircleExclamation, faClose, faUserCircle, faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './notification.css'
import React, { useEffect } from "react";

export default function Notification({ title, messenger, status, isShow, setIsshow }) {
    // status = false
    //status sẽ có 2 trạng thái thành công và không thành công true false 
    // status = false
    return (
        <> {
             isShow &&
            <div id="toast" className={` toast_container ${status ? 'toast--success' : 'toast--error'}`}>
                {
                    status ?
                        <div className="toast__icon toast--success">
                            <FontAwesomeIcon icon={faCheckCircle} className="success_icon phutest_icon" />
                        </div> :
                        <div className="toast__icon toast--error">
                            <FontAwesomeIcon icon={faWarning} className="phutest_icon" />
                        </div>
                }
                <div className="toast__body">
                    <h3 className="toast__title ">{title}</h3>
                    <p className="toast__msg">{messenger}</p>
                </div>
                <div className="toast__close" onClick={() => {
                    setIsshow(false)
                }}>
                    <i >
                        <FontAwesomeIcon icon={faClose} id="" className="" />
                    </i>
                </div>
            </div>
            }
        </>
    );
}
