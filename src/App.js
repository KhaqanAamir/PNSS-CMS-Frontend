import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import StudentSignIn from "./components/Student/StudentSignIn";
import TeacherSignIn from "./components/Teacher/TeacherSignIn";
import AdminSignIn from "./components/Admin/AdminSignIn";
import StudentHome from "./components/Student/StudentHome";
import StudentHomeWork from "./components/Student/StudentHomeWork";
import StudentResult from "./components/Student/StudentResult";
import ActiveStudentState from "./components/Student/StudentContext/ActiveStudentState";

const AppRoutes = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    if (token) {
      navigate('/student/home');
    } else {
      navigate('/student/login');
    }
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Student Routes */}
      <Route path="/student/login" element={<ActiveStudentState><StudentSignIn /></ActiveStudentState>} />
      <Route path="/student/home" element={<ActiveStudentState><StudentHome /></ActiveStudentState>} />
      <Route path="/student/homework" element={<StudentHomeWork />} />
      <Route path="/student/result" element={<StudentResult />} />
      {/* Teacher Routes */}
      <Route path="/teacher/login" element={<TeacherSignIn />} />
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminSignIn />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
