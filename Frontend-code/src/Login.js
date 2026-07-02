import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 import "./Login.css";
 

export default function Login(){

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const submit = async (e) => {

        e.preventDefault();

        try{

            const response = await axios.post(
                "http://localhost:9191/api/v1/login",
                loginData
            );

            // if username and password are correct
            if(response.data === "Login Success"){

                alert("Login Successful");

                // redirect to home page
                navigate("/Home1");
            }
            else{

                alert("Invalid Username or Password");
            }

        }
        catch(error){

            console.log(error);
            alert("Server Error");
        }
    };

 



    return (
        <div>

            {/* Navbar */}
            <nav className="navbar">
                <a href="/admin">Admin</a>
            </nav>

            {/* Login Form */}
            <div className="container">

                <div className="form-box">

                    <h2>Login</h2>

                    <form onSubmit={submit}>

                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) =>
                                setLoginData({
                                    ...loginData,
                                    username: e.target.value
                                })
                            }
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) =>
                                setLoginData({
                                    ...loginData,
                                    password: e.target.value
                                })
                            }
                        />

                        <button type="submit">
                            Login
                        </button>

                    </form>

                    <div className="register">
                        <p>
                            Don't have an account?
                            <a href="/AddUser"> Register</a>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

