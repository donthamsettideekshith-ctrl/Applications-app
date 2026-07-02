import { useState } from "react";
import { adduser } from "./UserService";
import "./Register.css";

export default function AddUser(){
    const [user,setUser]=useState({
        username:'',
        firstname:'',
        lastname:'',
        address:'',
        age:'',
        email:'',
        password:'',
    });

    const submit = (e)=>{
        adduser(user);
    };


return(



        <div className="register-container">

            <div className="register-form">

                <h2>Registration Form</h2>

                <form onSubmit={submit}>

                    <input
                        type="text"
                        placeholder="Username"
                        onChange={e =>
                            setUser({
                                ...user,
                                username: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={e =>
                            setUser({
                                ...user,
                                firstname: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={e =>
                            setUser({
                                ...user,
                                lastname: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Address"
                        onChange={e =>
                            setUser({
                                ...user,
                                address: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Age"
                        onChange={e =>
                            setUser({
                                ...user,
                                age: e.target.value
                            })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e =>
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={e =>
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }
                    />

                    <button type="submit">
                        Submit
                    </button>

                </form>

                <div className="login-link">
                    <p>
                        Already have an account?
                        <a href="/"> Login</a>
                    </p>
                </div>

            </div>

        </div>
   


);
}
