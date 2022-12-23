import React from "react";
import { Link } from "react-router-dom";

const Navbar =(props)=> {
    console.log(props.inputSearch)//control de lo q se escribe
    function checkinput(texto){
    if (texto=="" )
    {
      return(
        <img src="https://assets.stickpng.com/images/59cfc4d2d3b1936210a5ddc7.png" alt=""  className="finder-center"/>
      )
    }else{
        return(
             <img src="https://assets.stickpng.com/images/59cfc4d2d3b1936210a5ddc7.png" alt=""  className="finder-left"/>
            
        )
    }
  }
    return(

      
        <div className="NavBar"> {/*Div contenedor */}

            <div className="nav-first-row"> {/*Div con logo y texto*/}
                <div className="nav-columns ">
                    <div className="centrado">
                        <img src="../Imagenes/Pokeballblack.png" alt="" className="nav-logo" onClick={console.log(props.isLoggedIn)}/>
                    </div>

                    <Link to='/' className="pokedex-title">Pokedex</Link>
                    
                    
                </div>
                
                <div className="nav-columns2">{/*Div con el filter */}
                    <div className="hashtag centrado" onClick={()=>props.changeOrder()}>{props.orderByNumber ? '#' : 'AZ'} </div>
                    <div><img src="../Imagenes/Arrow.svg" alt=""  className="nav-filter"/></div>
                </div>

                
                
            </div>

            <div className="nav-second-row"> {/*Div con filter */}
            {checkinput(props.inputSearch)}
            <input type="search" placeholder="Search" onChange={(e)=>props.setInputSearch(e.target.value) }/>

            </div>
        </div>
    )
}
export default Navbar;