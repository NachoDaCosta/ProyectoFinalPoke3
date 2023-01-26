import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

export const Login=(props)=>{
    const[error,setError]=useState(localStorage.getItem("mensaje"))
    let navigate=useNavigate()

    function recargar () {
        window.location.href = window.location.href;
    }

const loginUser = () => {
    var message=""
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
        message="Welcome to the Pokedex"
        localStorage.setItem("mensaje",message)
        props.setIsLoggedIn(true)
        localStorage.setItem("token", JSON.stringify(data.token));
        navigate('/')
    }
    if(data.error=="Contraseña no valida"){
        message="Wrong Password"
        localStorage.setItem("mensaje",message)
        recargar();
    }
    if(data.error=="Usuario no encontrado"){
        message="Wrong User"
        localStorage.setItem("mensaje",message)
        recargar();
        
    }
    
    })
  }

  const redirect = () =>{ 
    let path = `/register`; 
    navigate(path);
  }



    return (
            
            <div className="login" >
                <Link to="/" className='home-login'>
                    <div>
                        <img src='./imagenes/home.png' alt=''/>
                    </div>
                    <div>Home</div>
                </Link>
                
                
                <div className='login-container'>
                    
                    <div className="centrar"  >
                        <span className="register-text">¡Login!</span>
                    </div>
                    
                        <div className="datos" id="formulario">
                            <div className="formu">
                                <label  className="centrar message-inputs">Enter your email 📧 </label>
                                <input type="text" id='email' name="email" placeholder="Email" form='email' className="input_large"/>
                            </div>
                            <div className="formu">
                                <label  className="centrar message-inputs">Enter your password 🔒 </label>
                                <input type="password" id='password' name="password" form='password' placeholder="Password"  className="input_large"/>
                                
                            </div>
                            <div className="enviar">
                                <div className='buttons-login'>
                                    <button className="submit" type='sumbit' onClick={redirect}>Register</button>
                                    <button className="submit" type='sumbit' onClick={loginUser}>Login</button>
                                </div>
                                <span className='error'>{error}!</span>
                            </div>
                        </div>
                    </div>
            </div>     

)}



