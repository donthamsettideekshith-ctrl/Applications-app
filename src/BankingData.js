import { useEffect, useState } from "react";
import { getbankingdata } from "./UserService";
import "./BankingTheme.css";

export default function BankingData(){
    const [banking, setbanking] = useState([]);
       
           useEffect(() => {
               getbankingdata()
               .then(resp => resp.data)
               .then(data => setbanking(data))
               .catch(error => console.log(error));
       
           }, []);
       
           return (
             <div>
         {/* Navbar */}
            <nav className="navbar">
                <a href="/AdminHome">AdminHome</a>
            </nav>
               <div className="banking-container">
       
                   <h1 className="banking-title">
                       Banking Application Data
                   </h1>
       
                   <table className="banking-table">
       
                       <thead>
                           <tr>
                               <th>ID</th>
                               <th>Name</th>
                               <th>SKILLS</th>
                               <th>Experience</th>
                               <th>Current Salary</th>
                               <th>Expected Salary</th>
                               <th>Phone No</th>
                               <th>Email</th>
                               <th>qualifications</th>
                           </tr>
                       </thead>
       
                       <tbody>
                           {banking.map((b) => (
                               <tr key={b.id}>
                                   <td>{b.id}</td>
                                   <td>{b.name}</td>
                                   <td>{b.skills}</td>
                                   <td>{b.experience}</td>
                                   <td>{b.currentSalary}</td>
                                   <td>{b.expectedSalary}</td>
                                   <td>{b.phoneNo}</td>
                                   <td>{b.email}</td>
                                   <td>{b.qualifications}</td>
                               </tr>
                           ))}
                       </tbody>
       
                   </table>
       
               </div>
               </div>
           );
}