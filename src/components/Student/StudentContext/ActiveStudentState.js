import React, { useState } from "react";
import ActiveStudentContext from "./ActiveStudentContext";
import axios from 'axios'

const ActiveStudentState = (props) => {
  const [student, setstudent] = useState("Hello");

  //student login route
  const login = async (data) => {
    console.log(data)
    const response = await axios
      .post("https://pnss-cms.onrender.com/api/v1/auth/Student/login", data)
      .then((responses) => {
        return responses.data;
      });

      localStorage.setItem('authToken', response.AuthToken);

    return response;
  };

  //get student data

  const getstudent=async()=>{
    const response = await fetch("https://pnss-cms.onrender.com/api/v1/auth/Student/getuser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "AuthToken":localStorage.getItem('authToken')
          },
        });
        const students = await response.json();

        setstudent(students)
        localStorage.setItem("studentdetails",student);
  }

  return (
    <ActiveStudentContext.Provider
      value={{ setstudent, student, login, getstudent }}
    >
      {props.children}
    </ActiveStudentContext.Provider>
  );
};

export default ActiveStudentState;
