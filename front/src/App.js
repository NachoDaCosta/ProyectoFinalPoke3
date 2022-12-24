import './App.css';
import {BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './Componentes/home';
import { useState, useEffect } from 'react';
import { Login } from './Componentes/Login/login';
import Pcard from './Componentes/Pcard/Pcard';
import Formulario from './Componentes/Formulario/Formulario';
import Error404 from './Componentes/404/404';
import Favorites from './Componentes/Favorites/Favorites';

function App() {
  const [pokemons,setPokemons]=useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token")? true : false);
  const [user, setUser] = useState([])
  const [time,setTime]=useState()
  const [favorite, setFavorite] = useState(localStorage.getItem("favoritelist") ?? [])


  const logout=()=>{
    setIsLoggedIn(false)
    console.log("Cerré la sesion ")
    localStorage.removeItem("token");
    localStorage.removeItem("favoritelist");
    
  }

  const getpokemons = () => {
    fetch('http://localhost:8080/pokemones')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPokemons(data)
      })
  } 

  useEffect(() => {
  getpokemons()
  console.log("se está ejecutando")
  }, [time]) 

  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home 
      pokemonList={pokemons} 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn} 
      logout={logout}/>}/>
      
      <Route exact path="/:id" element={<Pcard
      isLoggedIn={isLoggedIn} 
      favorite={favorite}
      setFavorite={setFavorite}
      pokemonList={pokemons}/>} /> {/*Pokemon individual */}
      
      <Route exact path="/login" element= {<Login 
      setUser={setUser} 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn} />} />

      <Route path="/addpokemon" element={<Formulario setTime={setTime}/>} />
      <Route path="/home/favorites" element={<Favorites 
                                    favorite={favorite}
                                    setFavorite={setFavorite}
                                    pokemonList={pokemons} 
                                    isLoggedIn={isLoggedIn} 
                                    setIsLoggedIn={setIsLoggedIn} 
                                    logout={logout}/>} />
      <Route path="/err-404" element={<Error404/>} />
    </Routes>
  </BrowserRouter>

  );
}


export default App;
