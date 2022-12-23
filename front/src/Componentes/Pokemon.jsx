import React from "react";
import { Link } from "react-router-dom";


const Pokemon=(props)=>{
    function pointsname(n){  //añdade ... si el nombre del pokemon es demasiado largo
    if(n.length>10){
        return(n.substring(0,7)+"...")
    }else{
        return(n)
    }
    }
    function mayus(str) {//nos añade la primer letra en mayuscula
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function ceros(n){ //nos añade ceros dependiendo el id del pokemon
            if (props.pokemon.id<10){
            return("00"+props.pokemon.id)
        } else if (props.pokemon.id>9){
            if(props.pokemon.id<100){
                return("0"+props.pokemon.id)
            }
            if(props.pokemon.id>99){
                return(props.pokemon.id)
            }
        }}

    return(
        <>
                <Link  to={`/${props.pokemon.id}`} key={props.pokemon.id} className="spacing"> 
                            {/*nos devuelve el pokemon de la lista de pokemones con un link que va a su id con una key asociada al id */}
                            <div className={`Pokemon-Container  white-background ${props.pokemon.PrimaryType} `} >
                                <div className="pokemon-number"> 
                                    #{ceros(props.pokemon.id)}
                                </div>

                                <div>
                                    <img src={props.pokemon.image} className="home-image" alt=""/>
                                </div>


                                <div className="pokemon-name">
                                    <span>{mayus(pointsname(props.pokemon.name))}</span>
                                </div>
                            </div>
                </Link>         
        </>
    )
}

export default Pokemon;
