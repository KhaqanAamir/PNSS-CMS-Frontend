import React, { useState } from 'react';
import ActiveStudentContext from './ActiveStudentContext'

const ActiveStudentState=(props)=>{


    const [student, setstudent]=useState('Hello')

    const activestudent=(name)=>{
        setstudent(name)
    }

    return(

    <ActiveStudentContext.Provider value={{activestudent, setstudent, student}}>
        {props.children}
    </ActiveStudentContext.Provider>

    )
}

export default ActiveStudentState;
