import { useEffect, useState } from "react";

import { getinformation } from "./UserService";
import "./Fetch.css";

function Fetch() {

    const [message, setMessage] = useState([]);

    useEffect(() => {
            getinformation()
            .then(resp => resp.data)
            .then(data => setMessage(data))
            .catch(error => console.log(error));

    }, []);

    return (
         <div>
         {/* Navbar */}
            <nav className="navbar">
                <a href="/AdminHome">AdminHome</a>
            </nav>
         <div>
          
                        <table border={1}>
                            <tr>
                            <th> id </th>
                            <th> username </th>
                            <th>  firstname </th>
                            <th> lastName </th>
                            <th> address </th>
                            <th> age </th>
                            <th> email</th>
                            <th> password </th>
                            </tr>
                            {message.map( emp => (
                                <tr>
                            <td>{emp.id}</td>
                            <td>{emp.username}</td>
                            <td>{emp.firstname}</td>
                            <td>{emp.lastname}</td>
                            <td>{emp.address}</td>
                            <td>{emp.age}</td>
                            <td>{emp.email}</td>
                            <td>{emp.password}</td>
                            </tr>
                            ))}
                            
                        </table>
                       
                   
        </div>
        </div>
    );
}

export default Fetch;