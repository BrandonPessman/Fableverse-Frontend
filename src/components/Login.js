import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { useCookies } from 'react-cookie';
 
function Login() {
    let history = useHistory();
    const [cookies, setCookie] = useCookies(['token']);
    const [isLoading, setLoading] = useState(true)
    const [status, setStatus] = useState("")

    useEffect(() => {
        axios.post(process.env.REACT_APP_BACKEND + '/auth/user', {token: cookies.token}).then(res => {
            //const status = res.data.status
            setLoading(false)
            history.push("/server/1")
        }).catch(err => {
            setLoading(false)
        })
    }, [cookies.token, history])

    function handleClick() {
        let data = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
        axios.post(process.env.REACT_APP_BACKEND + '/auth', data).then(res => {
            if (!res.data.error) {
                setCookie('token', res.data.token, { path: '/' });
                history.push("/server/1")
            } else {
                setStatus(res.data.error)
            }
            
        })
    }

  return (
    <div style={{marginTop: '20vh'}}>
        {isLoading ? <></> : 
        <>
            <center>
                <h1 className="logo">Fableverse<span style={{color: 'white'}}> - Login</span></h1>
                <input autoComplete="true" type="text" className="login-register-input" id="username" placeholder="Username" />
                <br />
                <input autoComplete="true" type="password" className="login-register-input" id="password" placeholder="Password" />
                <br />
                <button className="primary-button" style={{marginTop: '8px'}} onClick={handleClick}>Login</button>
                <p style={{color: 'red'}}>{status}</p>
                <p>Have an Alpha code? <Link to="/register">Click here.</Link></p>
            </center>
        </> }
    </div>
  );
}

export default Login;
