import { useState } from "react";
import { addmedical } from "./UserService";
//import "./Register.css";

function Medical() {

    const [Mdata, medical] = useState({
        name: '',
        specialization: '',
        experience: '',
        currentSalary: '',
        expectedSalary: '',
        phoneNo: '',
        email: '',
        qualifications: '',
    });

    const submit =  (e) => {
        addmedical(Mdata);

      
    };

    return (
         <div>

            {/* Navbar */}
            <nav className="navbar">
                <a href="/Home1">HOME</a>
            </nav>

        <div className="register-container">

            <div className="register-form">

                <h2>Medical Application Form</h2>

                <form onSubmit={submit}>

                    <input
                        type="text"
                        placeholder="Name"
                        onChange={e =>
                            medical({
                                ...Mdata,
                                name: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Specialization"
                        onChange={e =>
                            medical({
                                ...Mdata,
                                specialization: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Experience"
                        onChange={e =>
                            medical({
                                ...Mdata,
                                experience: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Current Salary"
                        onChange={e =>
                            medical({
                                ...Mdata,
                                currentSalary: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Expected Salary"
                        onChange={e =>
                            medical({
                                ...Mdata,
                                expectedSalary: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Phone Number"
                        onChange={e =>
                            medical({
                                ...Mdata,
                                phoneNo: e.target.value
                            })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e =>
                            medical({
                                ...Mdata,
                                email: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Qualifications"
                        onChange={e =>
                            medical({
                                ...Mdata,
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

export default Medical;