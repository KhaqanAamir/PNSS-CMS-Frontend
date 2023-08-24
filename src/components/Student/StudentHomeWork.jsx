import React from "react";
import SideBar from "../SideBar";
import Logo from "../Logo";
import "../../style/Student/StudentHomeWork.css";

const StudentHomeWork = () => {
  return (
    <>
      <SideBar />
      <div style={{ marginBottom: "10rem" }}>
        <Logo />
      </div>
      <div className="studenthomework-main-div">
        <h2>File Name</h2>
        <div className="newline"></div> <br />
        <br />
        <br />
        <form className="w-75">
          {/* <!-- Name input --> */}
          <div class="form-outline mb-4 w-50">
            <input type="text" id="form4Example1" class="form-control" />
            <label class="form-label" for="form4Example1">
              Name
            </label>
          </div>

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4 w-50">
            <input type="email" id="form4Example2" class="form-control" />
            <label class="form-label" for="form4Example2">
              Email address
            </label>
          </div>

          {/* <!-- Message input --> */}
          <div class="form-outline mb-4">
            <textarea
              class="form-control"
              id="form4Example3"
              rows="4"
              cols="6"
            ></textarea>
            <label class="form-label" for="form4Example3">
              Message
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Download File
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentHomeWork;
