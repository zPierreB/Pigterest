import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const Auth = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            navigate.push("/dahsboard");
        } catch (error) {
            if (error) {
                console.log(error);
            }
        }
    }

    return(
        <div>
            <form onSubmit={Auth}>
                <label>email</label>
                <input name="email" type="email" value={ email } onChange={(e) => setEmail(e.target.value)}/>
                <label>password</label>
                <input name="pswd" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="submit"></input>
            </form>
            
        </div>
    )
}

export default Login;