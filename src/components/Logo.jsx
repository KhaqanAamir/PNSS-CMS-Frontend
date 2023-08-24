import React from "react";
import "../style/Logo.css";
import SchoolLogo from '../Utils/School Logo.jpg'

const Logo = () => {
  return (
    <div className="landing-main-div">
        <div className="circle"></div>
        <br />
       
    <div className="logo">
      <center><img src={SchoolLogo} alt="School Logo" className="logo"/></center>
      <div className="after-logo">
      <h2>Campus Management System</h2>
      <p className="logoptag">Pakistan National School System</p>
      </div>
    </div>
    </div>
  );
};

export default Logo;
