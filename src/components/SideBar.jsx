import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import sidebaricon from '../Utils/sidebaricon.png'
import '../style/SideBar.css';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = () => {
  let history=useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onClickLogout=()=>{
      localStorage.clear();
      history('/student/login')
    }

  return (
    <>
    <Button variant="success" onClick={handleShow} className='sidebarbtn'>
        <img src={sidebaricon} alt="sidebar" className='sidebarimg'/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color:'green'}}>Pakistan National School</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Link to=''><button type="button" class="btn btn-outline-success btn-rounded sidebarbodybtn" data-mdb-ripple-color="dark">Attendance</button></Link>
        <Link to='/student/homework'><button type="button" class="btn btn-outline-success btn-rounded sidebarbodybtn" data-mdb-ripple-color="dark">Home Work</button></Link>
        <Link to='/student/result'><button type="button" class="btn btn-outline-success btn-rounded sidebarbodybtn" data-mdb-ripple-color="dark">Result</button></Link>
        <button type="button" class="btn btn-outline-success btn-rounded sidebarbodybtn" data-mdb-ripple-color="dark">Exam Routine</button>
        <button type="button" class="btn btn-outline-success btn-rounded sidebarbodybtn" data-mdb-ripple-color="dark">Solution</button>
        <button type="button" class="btn btn-outline-success btn-rounded sidebarbodybtn" data-mdb-ripple-color="dark">Quiz</button>
        <button type="button" class="btn btn-danger btn-rounded sidebarbodybtn" onClick={onClickLogout}>LogOut</button>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SideBar