import React from "react"
import Pokemon from "../Pokemon";
import { useState, useEffect } from 'react';
import Añadir from "../añadir/Añadir";
import { Link } from "react-router-dom";
import Cargando from "../Cargando/Cargando";
import Navbar from "../Nav";


const Favorites = (props) => {
    
    const [orderByNumber,setOrderByNumber] = useState(true)
    const [orderedList,setOrderedList] = useState(props.favorite)
    const [loading,setLoading]=useState(false)
    const [inputSearch,setInputSearch]=useState("")
    
  useEffect(()=>{
    setLoading(true)
    setTimeout( ()=>{
      setLoading(false)
      },1500)
  },[])

  

  useEffect(()=>{
    const auxList = props.favorite
    if(!orderByNumber){  /*Si es Distinta al orden numerico nos toma el orden Alfabetico */
        console.log("Ordeno por letra")
        console.log(props.favorite)
        auxList.sort((a,b)=>String(a.name).localeCompare(b.name))
      }
      else  if(orderByNumber){
        console.log("Ordeno por numero")
        auxList.sort((a,b)=>a.id - b.id)
      }
      console.log(auxList)
      setOrderedList(Object.assign([],auxList))  /*seteamos el orden de la lista segun el filtro */
  },[orderByNumber,props.favorite])


  function changeOrder (){  
    setOrderByNumber(!orderByNumber)
  }

    return(
  
        <div className="pokemon-conteiner-home" >
            <Navbar inputSearch={inputSearch} 
            setInputSearch={setInputSearch} 
            orderByNumber={orderByNumber} 
            changeOrder={changeOrder}
            
          /> 

          {loading ? (<Cargando />):(
            <div className="home-second-row">
              <div className="pokeList" >
                
              
              {
                props.favorite.filter(pokemon=> pokemon.name.toLowerCase().includes(inputSearch.toLowerCase())).map((pokemon,key)=>{
                  return(
                    
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>    
                        )
                })
              }
              </div>
              
              <div className="div-logout" >
                <Link to='/home/favorites' className="div-favorites">
                  <span className="heart-favs">❤️</span>
                  <span>Favorites</span>
                </Link>
                <Link to='/login' >
                <span className="logout" onClick={props.logout}>{props.isLoggedIn ? 'Logout' : 'Ingresa'}
                </span>
                </Link>
              </div>
            </div>)}
          
        </div>) 
}
    


export default Favorites;