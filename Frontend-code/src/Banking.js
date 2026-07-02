import { useState } from "react";
import { addbanking } from "./UserService";
//import "./Register.css";

function Banking(){
   const [Bdata, Banking] = useState({
           name: '',
           skills: '',
           experience: '',
           currentSalary: '',
           expectedSalary: '',
           phoneNo: '',
           email: '',
           qualifications: '',
       });
   
       const submit =  (e) => {
           addbanking(Bdata);
   
         
       };
   
       return (
         <div>

            {/* Navbar */}
            <nav className="navbar">
                <a href="/home1">HOME</a>
            </nav>
   
           <div className="register-container">
   
               <div className="register-form">
   
                   <h2>Banking Application Form</h2>
   
                   <form onSubmit={submit}>
   
                       <input
                           type="text"
                           placeholder="Name"
                           onChange={e =>
                               Banking({
                                   ...Bdata,
                                   name: e.target.value
                               })
                           }
                       />
   
                       <input
                           type="text"
                           placeholder="skills"
                           onChange={e =>
                               Banking({
                                   ...Bdata,
                                   skills: e.target.value
                               })
                           }
                       />
   
                       <input
                           type="text"
                           placeholder="Experience"
                           onChange={e =>
                               Banking({
                                   ...Bdata,
                                   experience: e.target.value
                               })
                           }
                       />
   
                       <input
                           type="number"
                           placeholder="Current Salary"
                           onChange={e =>
                               Banking({
                                   ...Bdata,
                                   currentSalary: e.target.value
                               })
                           }
                       />
   
                       <input
                           type="number"
                           placeholder="Expected Salary"
                           onChange={e =>
                               Banking({
                                   ...Bdata,
                                   expectedSalary: e.target.value
                               })
                           }
                       />
   
                       <input
                           type="number"
                           placeholder="Phone Number"
                           onChange={e =>
                               Banking({
                                   ...Bdata,
                                   phoneNo: e.target.value
                               })
                           }
                       />
   
                       <input
                           type="email"
                           placeholder="Email"
                           onChange={e =>
                               Banking({
                                   ...Bdata,
                                   email: e.target.value
                               })
                           }
                       />
   
                       <input
                           type="text"
                           placeholder="Qualifications"
                           onChange={e =>
                               Banking({
                                   ...Bdata,
                                   qualifications: e.target.value
                               })
                           }
                       />
   
                       <button type="submit">
                           Submit
                       </button>
   
                   </form>
   
               </div>
   
           </div>
           </div>
       );
   }
export default Banking;