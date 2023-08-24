import React, {useContext} from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../style/Student/StudentSignIn.css";
import attendanceicon from '../../Utils/attendanceicon.png'
import homeworkicon from '../../Utils/homeworkicon.png'
import resulticon from '../../Utils/resulticon.png'
import examroutine from '../../Utils/examroutine.webp'
import solutionicon from '../../Utils/solutionicon.png'
import quizicon from '../../Utils/quizicon.png'
import SideBar from "../SideBar";
import ActiveStudentContext from "./StudentContext/ActiveStudentContext.js";

const StudentHome = () => {
  const { student}=useContext(ActiveStudentContext)


  console.log(student)
  return (
    <>
    <SideBar/>
      <div style={{ marginBottom: "10rem" }}>
        <Logo />
      </div>
      <div className="cards">
        <Link to="/admin/login">
          <Card className="car studenthomecard">
            <center>
              <Card.Img variant="top" src={attendanceicon} className="cardimg" />
            </center>
          </Card>
          <h5 style={{textAlign:'center', marginTop:'0.7em'}}>Attendance</h5>
        </Link>

        <Link to="/student/homework">
          <Card className="car studenthomecard ">
            <center>
              <Card.Img variant="top" src={homeworkicon} className="cardimg" />
            </center>
          </Card>
          <h5 style={{textAlign:'center', marginTop:'0.7em'}}>Home Work</h5>
        </Link>

        <Link to="/student/result">
          <Card className="car studenthomecard">
            <center>
              <Card.Img variant="top" src={resulticon} className="cardimg" />
            </center>
          </Card>
          <h5 style={{textAlign:'center', marginTop:'0.7em'}}>Result</h5>
        </Link>

        <Link to="/student/login">
          <Card className="car studenthomecard">
            <center>
              <Card.Img variant="top" src={examroutine} className="cardimg" />
            </center>
          </Card>
          <h5 style={{textAlign:'center', marginTop:'0.7em'}}>Exam Routine</h5>
        </Link>

        <Link to="/student/login">
          <Card className="car studenthomecard">
            <center>
              <Card.Img variant="top" src={solutionicon} className="cardimg" />
            </center>
          </Card>
          <h5 style={{textAlign:'center', marginTop:'0.7em'}}>Solution</h5>
        </Link>

        <Link to="/student/login">
          <Card className="car studenthomecard">
            <center>
              <Card.Img variant="top" src={quizicon} className="cardimg" />
            </center>
          </Card>
          <h5 style={{textAlign:'center', marginTop:'0.7em'}}>Quiz</h5>
        </Link>
      </div>
    </>
  );
};

export default StudentHome;
