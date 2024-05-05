import React from 'react'
import { useNavigate } from 'react-router-dom'
import icon from './Assets/MERKIST Logo.png';
import { Link } from 'react-router-dom';


const Account = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/social");
  }

  return (

    
    <>
    <p style={{ textAlign: 'left', fontSize: "110px", fontWeight: "700", color:"lightgray"}} >Let's Connect</p>


          <img src={icon} alt="Icon" className="page-icon" />

      <div className="welcome " style={{ fontWeight: 'bold' }}>Welcome</div>


      <Link to='/home'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,textDecoration:'none' }}>
        <button onClick={handleClick} className="btn">Let's Connect</button>
      </div>      
    </Link>
  


    </>
  )
}

export default Account;