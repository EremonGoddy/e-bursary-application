import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from "./components/homepage/Homepage";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Contact from "./components/homepage/Contact";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ForgotPassword from "./components/authentication/ForgotPassword";
import StudentDashboard from "./components/dashboards/StudentDashboard";
import Personaldetails from "./components/applicationform/Personaldetails";
import Familydetails from "./components/applicationform/Familydetails";
import Amountdetails from "./components/applicationform/Amountdetails";
import Disclosuredetails from "./components/applicationform/Disclosuredetails";
import Documentupload from "./components/applicationform/Documentupload";
import Reports from "./components/applicationform/Reports";
import Setting from "./components/applicationform/Setting";
import CommitteeDashboard from "./components/dashboards/CommitteeDashboard";
import Profile from "./components/committeeview/Profile";
import UserDetails from "./components/committeeview/Userdetails";
import PersonalInformation from "./components/committeeview/PersonalInformation";
import Comreport from "./components/committeeview/Comreport";
import Settings from "./components/committeeview/Settings";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import Usermanagement from "./components/admincontrols/Usermanagement";
import Bursaryfundmanagement from "./components/admincontrols/Bursaryfundmanagement";
import MonitoringApplication from "./components/admincontrols/MonitoringApplication";
import AdminReport from "./components/admincontrols/AdminReport";
import AuditLogs from "./components/admincontrols/AuditLogs";
import AdminSetting from "./components/admincontrols/AdminSetting";
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path="/"  element={<Homepage/>}/>
    <Route path="/about"  element={<About/>}/>
    <Route path="/services"  element={<Services/>}/>
    <Route path="/contact"  element={<Contact/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/register"  element={<Register/>}/>
    <Route path="/forgotpassword"  element={<ForgotPassword/>}/>
    <Route path="/studentdashboard"  element={<StudentDashboard/>}/>
    <Route path="/personaldetails"  element={<Personaldetails/>}/>
    <Route path="/familydetails"  element={<Familydetails/>}/>
    <Route path="/amountdetails"  element={<Amountdetails/>}/>
    <Route path="/disclosuredetails"  element={<Disclosuredetails/>}/>
    <Route path="/documentupload"  element={<Documentupload/>}/>
    <Route path="/report"  element={<Reports/>}/>
    <Route path="/setting"  element={<Setting/>}/>
    <Route path="/committeedashboard"  element={<CommitteeDashboard/>}/>
    <Route path="/profile"  element={<Profile/>}/>
    <Route path="/userdetails"  element={<UserDetails/>}/>
    <Route path="/PersonalInformation" element={<PersonalInformation/>} />
  <Route path="/personalInformation/:id" element={<PersonalInformation/>} />
  <Route path="/comreport" element={<Comreport/>} />
  <Route path="/settings" element={<Settings/>} />
  <Route path="/admindashboard"  element={<AdminDashboard/>}/>
  <Route path="/usermanagement"  element={<Usermanagement/>}/>
  <Route path="/bursarymanagement"  element={<Bursaryfundmanagement/>}/>
  <Route path="/monitoring"  element={<MonitoringApplication/>}/> 
  <Route path="/adminreport"  element={<AdminReport/>}/> 
  <Route path="/auditlogs"  element={<AuditLogs/>}/> 
  <Route path="/adminsetting"  element={<AdminSetting/>}/> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
