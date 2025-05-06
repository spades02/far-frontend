import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Listing from "./pages/Listing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupThirdParty from "./pages/SignupThirdParty";
import WelcomeStudent from "./pages/WelcomeStudent";
import WelcomePreceptor from "./pages/WelcomePreceptor";
import AddARotation from "./pages/AddARotation";
import StudentApplies from "./pages/StudentApplies";
import PreceptorConfirms from "./pages/PreceptorConfirms";
import StudentProfile from "./pages/StudentProfile";
import EditStudentProfile from "./components/EditStudentProfile";
import EditPreceptorProfile from "./components/EditPreceptorProfile";
import EditProfile from "./pages/EditProfile";
import Messages from "./pages/Messages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />

      {/* The rest of your routes */}
      <Route path="/results" element={<Results />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/signup_third_party" element={<SignupThirdParty />} />
      <Route path="/welcome_student" element={<WelcomeStudent />} />
      <Route path="/welcome_preceptor" element={<WelcomePreceptor />} />
      <Route path="/add_a_rotation" element={<AddARotation />} />
      <Route path="/student_applies" element={<StudentApplies />} />
      <Route path="/preceptor_confirms" element={<PreceptorConfirms />} />
      <Route path="/student_profile" element={<StudentProfile />} />
      <Route path="/edit_profile" element={<EditProfile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/edit_student_profile" element={<EditStudentProfile />} />
      <Route
        path="/edit_preceptor_profile"
        element={<EditPreceptorProfile />}
      />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
