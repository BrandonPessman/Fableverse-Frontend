import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from 'axios'

function Register() {
    const [status, setStatus] = useState("")
    let history = useHistory();

    function handleClick() {
      let data = {
        alphakey: document.getElementById('alphakey').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirm-password').value,
        email: document.getElementById('email').value
      }

      if (data.alphakey === "") {
        setStatus("You must have an alpha key.")
        return
      }

      if (data.username.length < 3) {
        setStatus("Username must be 3 or more characters long.")
        return
      }

      if (data.password !== data.confirmPassword) {
        setStatus("Passwords do not match.")
        return
      }

      if (data.password.length < 6) {
        setStatus("Passwords must be 6 or more characters long.")
        return
      }

      // eslint-disable-next-line
      var re = /\S+@\S+\.\S+/
      if (!re.test(data.email.toLowerCase())) {
        setStatus("Email is invalid.")
        return
      }

      setStatus('')

      axios.post(process.env.REACT_APP_BACKEND + '/auth/register', data).then(res => {
        if (res.data.status === "Success") {
          history.push('/login')
        } else {
          setStatus("Something went wrong in creating an account.")
        }
      })
        
    }

  return (
    <div style={{marginTop: '20vh'}}>
        <center>
            <h1 className="logo">Fableverse<span style={{color: 'white'}}> - Register</span></h1>
            <input autoComplete="false" type="text" className="login-register-input" id="alphakey" placeholder="Alpha Key" />
            <br />
            <input autoComplete="false" type="text" className="login-register-input" id="username" placeholder="Username" />
            <br />
            <input autoComplete="false" type="password" className="login-register-input" id="password" placeholder="Password" />
            <br />
            <input autoComplete="false" type="password" className="login-register-input" id="confirm-password" placeholder="Confirm Password" />
            <br />
            <input autoComplete="false" type="text" className="login-register-input" id="email" placeholder="Email" />
            <br />
            <p style={{color: 'red'}}>{status}</p>
            <button className="primary-button" style={{marginTop: '8px'}} onClick={handleClick}>Create Account</button>
            <p>Already have an account? <Link to="/">Click here to login.</Link></p>
        </center>
    </div>
  );
}

export default Register;
