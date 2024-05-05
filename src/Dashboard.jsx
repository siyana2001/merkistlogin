import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import {useClerk} from '@clerk/clerk-react'
import logo from './profile/logo.png'

import './profile/profile.css';
export default function Dashboard() {
  const {user}=useClerk();
  console.log(user);
  return (
    <>
     <div className="user-details">
          <div className="merkist-logo-02-1-parent">
            <img
              className="merkist-logo-02-1"
              loading="lazy"
              alt=""
              src={logo}
            />
             <div className="icons">
            <UserButton/>
            </div>
          <a href="/">
            <div className="help-wrapper">
              <div className="help">Help</div>
            </div>
          </a>
              
         

          </div>
          <div className="icbaseline-facebook" />
          <section className="user-details-inner">
            <div className="frame-parent">
              <div className="frame-wrapper">
                <div className="frame-group">
                  <div className="polygon-parent">
                    <img
                      className="frame-child"
                      loading="lazy"
                      alt=""
                      src="/polygon.png"
                    />
                    <div className="user-info-parent">
                      <div className="user-info">
                        <div className="user-name-parent">
                          <b className="user-name">User Name </b>
                          <b className="user-email">User Email </b>
                        </div>  
                      </div>
                      <a href="/">
                        <div className="back">Back</div>
                      </a>
                      <div className="unsplash3jmfencl24m-parent">
                <div className="right-5">
                <img
                  className="unsplash3jmfencl24m-icon "
                  loading="lazy"
                  alt=""
                  src={user.imageUrl}
                />   
                </div>
              </div>
                    </div>
                  </div>
                  <div className="frame-container">
                    <div className="frame-div">
                      <div className="frame-parent1">
                        <div className="vector-wrapper">
                          <img
                            className="vector-icon"
                            loading="lazy"
                            alt=""
                            src="/vector.png"
                          />
                        </div>
                        <b className="merkist-project">{user.fullName}</b>
                      </div>
                      <div className="frame-parent2">
                        <div className="vector-container">
                          {/* <img
                            className="vector-icon1"
                            loading="lazy"
                            alt="as"
                            src={ user.imageUrl}
                          /> */}
                        
                        </div>
                        <b className="merkistgmailcom">{user.primaryEmailAddress.emailAddress}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>       
              </div>
              
            </div>
          </section>
        </div>
    </>
  )
}




    // <div>
    //   <p>{user.fullName}</p>
    //   <p>{user.primaryEmailAddress.emailAddress}</p>
    // <Profile user={user}/>

    // </div>