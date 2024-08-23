import { useState } from 'react';
import axios from 'axios';
import './Request1.css'; 

export default function Request1() {
    const [formData, setFormData] = useState({
        guardid: '',
        name: '',
        reasons: '',
        timefrom: '',
        timeto: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3000/bodyguard/request/dayoff', {
                guardid: formData.guardid,
                reasons: formData.reasons,
                timefrom: formData.timefrom,
                timeto: formData.timeto,
            });

            if (response.status === 201) {
                alert('Request submitted successfully!');
                window.location.reload();
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            alert('Failed to submit request. Please try again.');
        }
    };

    return (
        <div className="MainSection">
            <div className="TitlePage">
                <h1>Request Day Off</h1>
            </div>
            <div className="DayOffForm">
                <form className='DayOff' onSubmit={handleSubmit}>
                    <div className="IdInput">
                        <h3>ID:</h3>
                        <input 
                            type="text" 
                            name="guardid" 
                            className='Inp1' 
                            value={formData.guardid}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="NameInput">
                        <h3>Name:</h3>
                        <input 
                            type="text" 
                            name="name" 
                            className='Inp1'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ReasonInput">
                        <h3>Reasons: </h3>
                        <textarea
                            rows="7"
                            cols="50"
                            name="reasons"
                            value={formData.reasons}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="Time">
                        <h3>From: 
                            <input 
                                type="date" 
                                name="timefrom" 
                                value={formData.timefrom}
                                onChange={handleChange}
                            />
                        </h3>
                        <h3>To: 
                            <input 
                                type="date" 
                                name="timeto" 
                                value={formData.timeto}
                                onChange={handleChange}
                            />
                        </h3>
                    </div>
                    <button type='submit' className='SubmitBtn'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
