import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();

    function handleClick() {
        history.push("/server/1");
    }

  return (
    <div style={{marginTop: '20vh'}}>
        <center>
            <h1 className="logo">Fableverse<span style={{color: 'white'}}> - Register</span></h1>
            <input type="text" className="login-register-input" id="alphakey" placeholder="Alpha Key" />
            <br />
            <input type="text" className="login-register-input" id="username" placeholder="Username" />
            <br />
            <input type="password" className="login-register-input" id="password" placeholder="Password" />
            <br />
            <input type="password" className="login-register-input" id="confirm-password" placeholder="Confirm Password" />
            <br />
            <input type="password" className="login-register-input" id="email" placeholder="Email" />
            <br />
            <button className="primary-button" style={{marginTop: '8px'}} onClick={handleClick}>Create Account</button>
            <p>Already have an account? <Link to="/">Click here to login.</Link></p>
        </center>
    </div>
  );
}

export default Login;
