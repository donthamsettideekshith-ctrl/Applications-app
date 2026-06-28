import { useState } from "react";
//import "./Register.css";
import { addsoftware } from "./UserService";

export default function Software() {

    const [Sdata, software] = useState({
        name: '',
        skills: '',
        experience: '',
        currentSalary: '',
        expectedSalary: '',
        phoneNo: '',
        email: '',
        qualification: '',
    });

    const submit = (e) => {
        addsoftware(Sdata);

       
    };

    return (
         <div>

            {/* Navbar */}
            <nav className="navbar">
                <a href="/Home1">HOME</a>
            </nav>

        <div className="register-container">

            <div className="register-form">

                <h2>Software Application Form</h2>

                <form onSubmit={submit}>

                    <input
                        type="text"
                        placeholder="Name"
                        onChange={e =>
                            software({
                                ...Sdata,
                                name: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Skills"
                        onChange={e =>
                            software({
                                ...Sdata,
                                skills: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Experience"
                        onChange={e =>
                            software({
                                ...Sdata,
                                experience: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Current Salary"
                        onChange={e =>
                            software({
                                ...Sdata,
                                currentSalary: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Expected Salary"
                        onChange={e =>
                            software({
                                ...Sdata,
                                expectedSalary: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Phone Number"
                        onChange={e =>
                            software({
                                ...Sdata,
                                phoneNo: e.target.value
                            })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e =>
                            software({
                                ...Sdata,
                                email: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Qualification"
                        onChange={e =>
                            software({
                                ...Sdata,
                                qualification: e.target.value
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