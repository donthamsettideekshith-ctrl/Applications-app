import { useState } from "react";
import { addteaching } from "./UserService";
//import "./Register.css";

function Teaching() {

    const [Tdata, Teaching] = useState({
        name: '',
        skills: '',
        experience: '',
        currentSalary: '',
        expectedSalary: '',
        phoneNo: '',
        email: '',
        qualifications: '',
    });

    const submit = (e) => {
        addteaching(Tdata);
    };

    return (
         <div>

            {/* Navbar */}
            <nav className="navbar">
                <a href="/Home1">HOME</a>
            </nav>

        <div className="register-container">

            <div className="register-form">

                <h2>Teaching Application Form</h2>

                <form onSubmit={submit}>

                    <input
                        type="text"
                        placeholder="Name"
                        onChange={e =>
                            Teaching({
                                ...Tdata,
                                name: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                        onChange={e =>
                            Teaching({
                                ...Tdata,
                                skills: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Experience"
                        onChange={e =>
                            Teaching({
                                ...Tdata,
                                experience: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Current Salary"
                        onChange={e =>
                            Teaching({
                                ...Tdata,
                                currentSalary: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Expected Salary"
                        onChange={e =>
                            Teaching({
                                ...Tdata,
                                expectedSalary: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Phone Number"
                        onChange={e =>
                            Teaching({
                                ...Tdata,
                                phoneNo: e.target.value
                            })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e =>
                            Teaching({
                                ...Tdata,
                                email: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Qualifications"
                        onChange={e =>
                            Teaching({
                                ...Tdata,
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

export default Teaching;