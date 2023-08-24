import React from "react";
import "../style/LandingPage.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import teachericon from '../Utils/teachericon.png'
import adminicon from '../Utils/adminicon.png'
import studenticon from '../Utils/studenticon.png'
import Card from "react-bootstrap/Card";

const LandingPage = () => {
  return (
    <>
        <div className="logodiv" >
          <Logo />
        </div>

      <div className="cards">
      <Link to="/admin/login">
          <Card className="car card">
            <center>
              <Card.Img variant="top" src={adminicon} className="cardimg" />
            </center>
            <center>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  This is Admin Portal
                </Card.Title>
                <p>Admin Login</p>
              </Card.Body>
            </center>
          </Card>
          </Link>

          <Link to='/teacher/login'>
          <Card className="car card">
            <center>
              <Card.Img variant="top" src={teachericon} className="cardimg" />
            </center>
            <center>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  This is Teacher Portal
                </Card.Title>
                <p>Teacher Login</p>
              </Card.Body>
            </center>
          </Card>
          </Link>

          <Link to='/student/login'>
          <Card className="car card">
            <center>
              <Card.Img variant="top" src={studenticon} className="cardimg" />
            </center>
            <center>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  This is Student Portal
                </Card.Title>
                <p>Student Login</p>
              </Card.Body>
            </center>
          </Card>
      </Link>
      </div>
    </>
  );
};

export default LandingPage;
