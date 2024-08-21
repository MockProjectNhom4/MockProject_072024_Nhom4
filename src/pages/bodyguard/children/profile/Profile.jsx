import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil, faCalendarDays, faPaperclip} from '@fortawesome/free-solid-svg-icons'; 

export default function Profile(){
    return (
        <div className="ProfileMain">
            <div className="Section1">
                <div className="Avatar">
                    <img src='/public/avatar.jpg' alt="GuardAvatar" />
                </div>
                <div className="GuardName">
                    <h1>John Doe</h1>
                    <button type="submit">
                        <FontAwesomeIcon icon={faPencil} 
                        style={{color: '#FF1E56', fontSize: 'auto' }}/>
                    </button>
                </div>
            </div>
            <div className="Section2">
                <h3>ID: <span className="ColorText">PG5464679</span></h3>
                <h3>Email: <span>john23@gmail.com</span></h3>
                <h3>Phone: <span>0xxx.xxx.xxx</span></h3>
                <h3>Date of Birth: 
                    <span className="ColorText">December 07, 1996</span>
                    <FontAwesomeIcon icon={faCalendarDays} style={{marginLeft: '10px'}}/>
                </h3>
                <h3>Address: <span className="ColorText">Pasadena, Califonia</span></h3>
                <h3>Gender: <span>Male</span></h3>
                <div className="Certificate">
                    <h3>Certificate: </h3>
                    <button type='submit' className='CertBtn'>
                        <FontAwesomeIcon icon={faPaperclip} />
                            File Contract
                    </button>
                </div>
                <div className="SaveButton">
                    <button type="submit">Save</button>
                </div>  
            </div>
                     
        </div>
    );
}