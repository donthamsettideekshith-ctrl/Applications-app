import { useEffect, useState } from "react";
import { getmedicaldata } from "./UserService";
import "./MedicalData.css";




export default function MedicalData(){
        const [Medical, setMedical] = useState([]);
    
        useEffect(() => {
            getmedicaldata()
            .then(resp => resp.data)
            .then(data => setMedical(data))
            .catch(error => console.log(error));
    
        }, []);
    
        return (
             <div>
         {/* Navbar */}
            <nav className="navbar">
                <a href="/AdminHome">AdminHome</a>
            </nav>
            <div className="medical-container">
    
                <h1 className="medical-title">
                    Medical Application Data
                </h1>
    
                <table className="medical-table">
    
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>specialization</th>
                            <th>Experience</th>
                            <th>Current Salary</th>
                            <th>Expected Salary</th>
                            <th>Phone No</th>
                            <th>Email</th>
                            <th>qualifications</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {Medical.map((m) => (
                            <tr key={m.id}>
                                <td>{m.id}</td>
                                <td>{m.name}</td>
                                <td>{m.specialization}</td>
                                <td>{m.experience}</td>
                                <td>{m.currentSalary}</td>
                                <td>{m.expectedSalary}</td>
                                <td>{m.phoneNo}</td>
                                <td>{m.email}</td>
                                <td>{m.qualifications}</td>
                            </tr>
                        ))}
                    </tbody>
    
                </table>
    
            </div>
            </div>
        );
}