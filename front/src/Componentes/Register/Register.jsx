import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

export const Register=(props)=>{
    const[errormsg,setError]=useState(localStorage.getItem("mensaje-register"))
    let navigate=useNavigate()

const registerUser = () => {
    var registermsg=""
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: document.getElementById('email').value, password: document.getElementById('password').value })
    }
    fetch('http://localhost:8080/auth/register', requestOption)
    .then(response => response.json())
    .then(
        data => {
        console.log(data)
        if(data.success==true){
        registermsg="Create a User"
        localStorage.setItem("mensaje-register",registermsg)
        navigate('/login')
        }
        else {
        registermsg="Las credenciales ingresadas no son validas"
        localStorage.setItem("mensaje-register",registermsg)
        recargar();
        }
        }
    )
  }

  function recargar () {
        window.location.href = window.location.href;
    }

   

    

    return (
            
            <div className="login" >
                <div className='divs-login' >
                    <Link to="/" className='home-login' >
                        <div>
                            <img src='./imagenes/home.png' alt='' />
                        </div>
                        <div>Home</div>
                    </Link>
                    <Link to="/login" className='home-login' >
                        <div>Login</div>
                    </Link>
                </div>
                
                
                <div className='login-container'>
                    
                    <div className="centrar"  >
                        <span className="register-text">¡Register!</span>
                    </div>
                    
                        <div className="datos" id="formulario">
                            <div className="formu">
                                <label  className="centrar message-inputs">Enter your email 📧 </label>
                                <input type="text" id='email' name="email" placeholder="Email@Example.com" form='email' className="input_large"/>
                            </div>
                            <div className="formu">
                                <label  className="centrar message-inputs">Create a password 🔒 </label>
                                <input type="password" id='password' name="password" form='password' placeholder="Password"  className="input_large"/>
                                
                            </div>
                            <div className="enviar">
                                <button className="submit" type='sumbit' onClick={registerUser}>Register</button>
                                <span className='error'>{errormsg}</span>
                            </div>
                        </div>
                    </div>
            </div>     

)}



