import { SignInButton } from "@clerk/clerk-react";
import React from "react";
import './index.css'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "./login/Assets/Merkist Logo 02.png";
export default function Home() {
  return (
    <>
     <div className="padding_sec">
     <div className="home_page">
        <div className="nav_sec">
          <div className="left1">
            <img src={logo} alt="dwad" height={60} />
          </div>
          <div className="right1" >
            Help
          </div>
        </div>
        <div className="main_home">
          <h1 className="fw-100">Let's Connect</h1>
          <h2 className="greencolor">Let's Get Connected</h2>
          <div className="btns_home">
            <div className="left">
            <button className="greenborder"> <FaXTwitter/> connect with Twitter</button>
            <Link to="/dashboard" className="links">
            <button  className="greenborder" > <IoLogoFacebook /> <SignInButton mode='modal' className="hide">
             sign in with facebook
            </SignInButton> 
      </button>
            </Link>
            </div>
            <div className="right">
              <button  className="greenborder"><FaLinkedin/> connect with Linkedin</button>
              <button  className="greenborder"><TiSocialInstagram/>connect with Instagram</button>
            </div>

          </div>
          <Link to='/account' style={{ textDecoration: 'none' }}>
          <div className="txt" >
             <h4 ><BiSolidLeftArrow/> Back</h4>
           </div>
        </Link>
 

        </div>
        


      </div>
     </div>
     
      
    </>
  );
}
