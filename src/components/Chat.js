import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { useCookies } from 'react-cookie';

import io from 'socket.io-client'
const socket = io('http://localhost:8002/1', {transports: ['websocket']});

function Chat() {
    const [user, setUser] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [cookies, setCookie] = useCookies(['token']);
    let history = useHistory();

    useEffect(() => {
        axios.post(process.env.REACT_APP_BACKEND + '/auth/user', {token: cookies.token}).then(res => {
            //const status = res.data.status
            setUser(res.data.data)
            setLoading(false)

            socket.on('recieve message', function (chat) {
              console.log("Message from server.")
              console.log(chat)
            })

            // Get the input field
            const input = document.getElementById("chatbox");

            // Execute a function when the user releases a key on the keyboard
            input.addEventListener("keyup", function(event) {
                // Number 13 is the "Enter" key on the keyboard
                if (event.key === "Enter") {
                    const message = document.getElementById("chatbox").value
                    let data = {
                        from: res.data.data.username,
                        message: message
                    }
                    socket.emit('new message', data)
                    document.getElementById("chatbox").value = ""
                }
            });
        }).catch(err => {
            history.push("/");
        })
        
        return () => {
            socket.close()
        }
        // eslint-disable-next-line
    }, [])

    function handleClick() {
        setCookie('token', "", { path: '/' });
        history.push("/");
    }

  return (
    <div>
        {isLoading ? <></> : 
        <>
            <input type="text" id="chatbox" placeholder="Send a message..." />
            <button className="primary-button" onClick={handleClick} style={{  position: 'absolute', margin: '20px', right: 0, top: 0}}>Logout</button>
            <div className="message">
                <h2 style={{color: 'red', margin: '0 14px', fontSize: '16px', fontWeight: '500'}}>{user.username} has connected to chat.<span style={{fontSize: '12px', color: 'grey', marginLeft: '10px', fontWeight: '400'}}>Today at 9:18 AM</span></h2>
            </div>
            <div className="message">
                <h2 style={{color: '#FDD171', margin: '0 14px', fontSize: '16px', fontWeight: '500'}}>Brandon<span style={{fontSize: '12px', color: 'grey', marginLeft: '10px', fontWeight: '400'}}>Today at 9:18 AM</span></h2>
                <p style={{color: '#DCDDDE', margin: '0 14px', fontSize: '16px', fontWeight: '400'}}>Hey man! How are you doing?</p>
            </div>
        </>
        }
    </div>
  );
}

export default Chat;
