import React from "react";
import SideBar from "../SideBar";
import Logo from "../Logo";
import "../../style/Student/StudentResult.css";

const StudentResult = () => {
  return (
    <>
      <SideBar />
      <div style={{ marginBottom: "10rem" }}>
        <Logo />
      </div>
      <div className="studdentresult-main-div">
        <div class="card studentresultcard" style={{ width: "18rem;" }}>
          <div class="card-body">
            <h5 class="card-title">Quiz</h5>
            <h6 class="card-subtitle mb-2 text-muted">First</h6>
            <p class="card-text">
              Teacher will add here remarks about quiz of student
            </p>
            <a href="." class="card-link">
              View Quiz
            </a>
          </div>
        </div>

        <div className="newline"></div> <br />

        <div class="card studentresultcard" style={{ width: "18rem;" }}>
          <div class="card-body">
            <h5 class="card-title">Quiz</h5>
            <h6 class="card-subtitle mb-2 text-muted">Second</h6>
            <p class="card-text">
              Teacher Remarks
            </p>
            <a href="." class="card-link">
              View Quiz
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentResult;
