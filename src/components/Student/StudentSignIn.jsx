import React, {useState, useContext} from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import schoollogo from '../../Utils/School Logo.jpg'
import { useNavigate } from "react-router-dom";
import '../../style/Student/SignIn.css'
import ActiveStudentContext from "./StudentContext/ActiveStudentContext.js";

const StudentSignIn = () => {
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const history=useNavigate()
  const {login,getstudent}=useContext(ActiveStudentContext)

  const onchangeusername=(e)=>{
    setusername(e.target.value)
    console.log(username)
  }

  const onchangepassword=(e)=>{
    setpassword(e.target.value)
    

  }

  const data={
    registrationNumber:username,
    password: password
  }

  const onSubmit=async(event)=>{
    event.preventDefault()
    try{
     await login(data)
    

    const token=localStorage.getItem('authToken')

    if(token){      

      await getstudent();

      history('/student/home')
    }
  }
  catch(error){
    console.log(error)
  }

  }

  return (
    <form action="" onSubmit={onSubmit}>
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src={schoollogo}
            className="img-fluid schoollogosignin"
            alt="Sample"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in</p>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Student Portal</p>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="text"
            size="lg"
            onChange={onchangeusername}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            onChange={onchangepassword}
          />

          <div className="d-flex justify-content-between mb-4">
            <a href="!#">Forgot password?</a>
          </div>

          <div className="text-center text-md-start mt-4 pt-2">
            <input type="submit" className="mb-0 px-5 btn btn-success" size="lg" value="Submit"/>
          </div>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </form>
  );
};

export default StudentSignIn;
