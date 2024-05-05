import React, { useState } from 'react';
import './LoginForm.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import icon from './Assets/MERKIST Logo.png';
// import { Client } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { account } from '../config/Appwrite';

import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState({ name: "",  email: "", password:"", phonenumber: ""}); 
 

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      const signUpProcess = account.create(
        isSignUp.name,
        isSignUp.email, 
        isSignUp.password,  
        isSignUp.phonenumber,
      );
  
      signUpProcess.then(function(response){
        alert("SignUp successfully");
        navigate("/log");
      }).catch(function(error){
        alert(error.message || "An error occurred during sign up.");
      });
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error(error);
    }
    console.log(account); 
  };






  return (
    <>
   <div className='whole'>
      <img src={icon} alt="Icon" className="page-icon" />
      <div className={`container ${isSignUp ? 'active' : ''}`}>
        <div className="form-container sign-up">
          <form >
            <h2>Create Account</h2>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <input type="text" id='name' name="phonenumber" placeholder="Name" onChange={(e) => setIsSignUp({ ...isSignUp, phonenumber: e.target.value})} />
            <input type="email" id='email' name="email" placeholder="Email" onChange={(e) => setIsSignUp({ ...isSignUp, email: e.target.value})}/>
            <input type="password" id='password' name="password" placeholder="Password" onChange={(e) => setIsSignUp({ ...isSignUp, password: e.target.value})}/>
            <input type="text" id='num' name="name" placeholder="Phone Number" onChange={(e) => setIsSignUp({ ...isSignUp, name: e.target.value})} />
           
            <button type="submit" onClick={handleSignUp} id='signup'>Sign Up</button>
          </form>
        </div>






     



      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
           <h1>Welcome Back!</h1>
            <p>Enter your  personal details to use all site features</p>
            {/* <button className="hidden" onClick={toggleForm}>login</button> */}
            <Link to='/log'>
              <button className='hidden'>Login</button>
            </Link>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            {/* <button className="hidden" onClick={toggleForm}>Sign Up</button> */}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default LoginForm;
