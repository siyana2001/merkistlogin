import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../config/Appwrite';
import './LoginForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import icon from './Assets/MERKIST Logo.png';
import { Link } from 'react-router-dom';

export const Log = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginUser = async () => {
        account
        .deleteSession('current')
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err.message);
        })
        try {
            setIsLoading(true);
            await account.createEmailPasswordSession(formData.email, formData.password);
            navigate("/account");
        } catch (error) {
            setError(error.message || "An error occurred.");
        } finally {
            setIsLoading(false);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        if (!isLoading && formData.email && formData.password) {
            loginUser();
        } else {
            setError("Email and password are required.");
        }
    }

    return (
        <>
       
            <img src={icon} alt="Icon" className="page-icon" />
            <div className='container'>
                <div className="form-container sign-in">
                    <form onSubmit={handleSubmit}>
                        <h1>Log In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
                        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                        <a href="#">Forget Your Password?</a>
                        <button type="submit" disabled={isLoading}>Login</button>
                        {error && <div className="error-message">{error}</div>}
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all site features</p>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all site features</p>
                            <Link to='/sign'>
                                <button className='hidden'>signup</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}