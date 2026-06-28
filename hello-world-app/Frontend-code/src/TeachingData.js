import { useEffect, useState } from "react";
import { getteachingdata } from "./UserService";
import "./TeachingData.css";

export default function TeachingData(){
     const [Teaching, setTeaching] = useState([]);
        
            useEffect(() => {
                getteachingdata()
                .then(resp => resp.data)
                .then(data => setTeaching(data))
                .catch(error => console.log(error));
        
            }, []);
        
            return (
                 <div>
         {/* Navbar */}
            <nav className="navbar">
                <a href="/AdminHome">AdminHome</a>
            </nav>
                <div className="teaching-container">
        
                    <h1 className="teaching-title">
                        Teaching Application Data
                    </h1>
        
                    <table className="teaching-table">
        
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>SUBJECTS</th>
                                <th>Experience</th>
                                <th>Current Salary</th>
                                <th>Expected Salary</th>
                                <th>Phone No</th>
                                <th>Email</th>
                                <th>qualifications</th>
                            </tr>
                        </thead>
        
                        <tbody>
                            {Teaching.map((t) => (
                                <tr key={t.id}>
                                    <td>{t.id}</td>
                                    <td>{t.name}</td>
                                    <td>{t.skills}</td>
                                    <td>{t.experience}</td>
                                    <td>{t.currentSalary}</td>
                                    <td>{t.expectedSalary}</td>
                                    <td>{t.phoneNo}</td>
                                    <td>{t.email}</td>
                                    <td>{t.qualifications}</td>
                                </tr>
                            ))}
                        </tbody>
        
                    </table>
        
                </div>
                </div>
            );
}