import { useEffect, useState } from "react";
import { getsoftwaredata } from "./UserService";
import "./SoftwareData.css";



export default function SoftwareData() {

    const [Software, setSoftware] = useState([]);

    useEffect(() => {
        getsoftwaredata()
        .then(resp => resp.data)
        .then(data => setSoftware(data))
        .catch(error => console.log(error));

    }, []);

    return (
         <div>
         {/* Navbar */}
            <nav className="navbar">
                <a href="/AdminHome">AdminHome</a>
            </nav>
        <div className="software-container">

            <h1 className="software-title">
                Software Application Data
            </h1>

            <table className="software-table">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Skills</th>
                        <th>Experience</th>
                        <th>Current Salary</th>
                        <th>Expected Salary</th>
                        <th>Phone No</th>
                        <th>Email</th>
                        <th>qualifications</th>
                    </tr>
                </thead>

                <tbody>
                    {Software.map((s) => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.skills}</td>
                            <td>{s.experience}</td>
                            <td>{s.currentSalary}</td>
                            <td>{s.expectedSalary}</td>
                            <td>{s.phoneNo}</td>
                            <td>{s.email}</td>
                            <td>{s.qualifications}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
        </div>
    );
}