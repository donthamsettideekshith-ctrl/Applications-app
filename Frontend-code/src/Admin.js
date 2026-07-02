import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Admin() {

    const navigate = useNavigate();

    const [AdminData, setAdminData] = useState({
        username: "",
        password: ""
    });

    const submit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "https://backend-code-3-ajzx.onrender.com/Admin/login",
                AdminData
            );

            if (response.data === "Login Success") {

                alert("Login Successful");

                navigate("/AdminHome");
            }
            else {

                alert("Invalid Username or Password");
            }

        }
        catch (error) {

            console.log(error);

            alert("Server Error");
        }
    };

    return (

        <div className="container">

            <div className="form-box">

                <h2>Admin Login</h2>

                <form onSubmit={submit}>

                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) =>
                            setAdminData({
                                ...AdminData,
                                username: e.target.value
                            })
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) =>
                            setAdminData({
                                ...AdminData,
                                password: e.target.value
                            })
                        }
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}