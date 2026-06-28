import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AddUser from "./AddUser";
import Home1 from "./Home1";
import Software from "./Software";
import Medical from "./Medical";
import Banking from "./Banking";
import Teaching from "./Teaching";
import Admin from "./Admin";
import AdminHome from "./AdminHome";
import TeachingData from "./TeachingData";
import BankingData from "./BankingData";
import MedicalData from "./MedicalData";
import SoftwareData from "./SoftwareData";
import Fetch from "./Fetch";

function App1() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/Home1" element={<Home1 />} />

        <Route path="/Admin" element={<Admin />} />

        <Route path="/AdminHome" element={<AdminHome />} />

        <Route path="/adduser" element={<AddUser />} />

         <Route path="/Software" element={<Software />} />

         <Route path="/Medical" element={<Medical />} />

          <Route path="/Banking" element={<Banking />} />

           <Route path="/Teaching" element={<Teaching />} />

           <Route path="/TeachingData" element={<TeachingData />} />

           <Route path="/BankingData" element={<BankingData />} />

           <Route path="/MedicalData" element={<MedicalData />} />

           <Route path="/SoftwareData" element={<SoftwareData />} />

           <Route path="/Fetch" element={<Fetch />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App1;