import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCalendarDays, faPaperclip } from '@fortawesome/free-solid-svg-icons'; 

export default function Profile() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        userid: '',
        phone: '',
        address: '',
        experience: '',
        gender: '',
        dateofbirth: '',
        hiredate: '',
        education: '',
        salary: '',
        deleted: false,
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://localhost:3000/bodyguard/profile/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }
                const data = await response.json();
                setProfile(data.result);
                setFormData(data.result); // Set initial form data
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProfile();
    }, [id]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSaveClick = async () => {
        try {
            const response = await fetch('http://localhost:3000/bodyguard/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, id })
            });
            if (!response.ok) {
                throw new Error('Failed to update profile');
            }
            const data = await response.json();
            alert(data.message);
            setIsEditing(false);
            setProfile(formData); // Update the profile data
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="ProfileMain">
            <div className="Section1">
                <div className="Avatar">
                    <img src='/public/avatar.jpg' alt="GuardAvatar" />
                </div>
                <div className="GuardName">
                    <h1>{profile ? `Guard ${profile.userid}` : 'Loading...'}</h1>
                    <button type="button" onClick={handleEditClick}>
                        <FontAwesomeIcon icon={faPencil} style={{color: '#FF1E56', fontSize: 'auto' }}/>
                    </button>
                </div>
            </div>
            <div className="Section2">
                {isEditing ? (
                    <form className="ProfileForm">
                        <h3>Email: <input type="text" name="email" value={formData.email} onChange={handleInputChange} /></h3>
                        <h3>Phone: <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} /></h3>
                        <h3>Date of Birth: 
                            <input type="date" name="dateofbirth" value={formData.dateofbirth.split('T')[0]} onChange={handleInputChange} />
                        </h3>
                        <h3>Address: <input type="text" name="address" value={formData.address} onChange={handleInputChange} /></h3>
                        <div className="SaveButton">
                            <button type="button" onClick={handleSaveClick}>Save</button>
                        </div>  
                    </form>
                ) : (
                    <>
                        <h3>ID: <span className="ColorText">{profile ? profile.id : 'Loading...'}</span></h3>
                        <h3>Email: <span>{profile ? profile.email : 'Loading...'}</span></h3>
                        <h3>Phone: <span>{profile ? profile.phone : 'Loading...'}</span></h3>
                        <h3>Date of Birth: 
                            <span className="ColorText">{profile ? new Date(profile.dateofbirth).toLocaleDateString() : 'Loading...'}</span>
                            <FontAwesomeIcon icon={faCalendarDays} style={{marginLeft: '10px'}}/>
                        </h3>
                        <h3>Address: <span className="ColorText">{profile ? profile.address : 'Loading...'}</span></h3>
                        <h3>Gender: <span>{profile ? (profile.gender === 1 ? 'Male' : 'Female') : 'Loading...'}</span></h3>
                        <div className="Certificate">
                            <h3>Certificate: </h3>
                            <button type='submit' className='CertBtn'>
                                <FontAwesomeIcon icon={faPaperclip} />
                                File Contract
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
