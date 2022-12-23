import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login=(props)=>{
let navigate=useNavigate()

const loginUser = () => {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: document.getElementById('email').value, password: document.getElementById('password').value })
    }
    fetch('http://localhost:8080/auth/login', requestOption)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      props.setUser(data)
       if(data.error===null){
        localStorage.setItem("token", JSON.stringify(data.token));
        props.setIsLoggedIn(true)
        navigate('/')
    }
    })
  }

    return (
        
            <div className="login">
                <div className='login-container'>
                    <div className="centrar">
                        <h1 className="register-text lowmr">¡Login!</h1>
                    </div>
                    
                        <div className="datos" id="formulario">
                            <div className="formu">
                                <label  className="centrar">Enter your Email 📧</label>
                                <input type="text" id='email' name="email" placeholder="Email" form='email' className="input_large"/>
                            </div>
                            <div className="formu">
                                <label  className="centrar space">Enter your password 🔒</label>
                                <input type="password" id='password' name="password" form='password' placeholder="Password" className="input_large"/>
                                
                            </div>
                            <div className="enviar">
                                <button className="submit" onClick={loginUser}>Ingresar</button>
                            </div>
                        </div>
                    </div>
            </div>     

)}



