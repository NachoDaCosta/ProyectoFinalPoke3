import React from "react";
import { Link } from "react-router-dom";

const Añadir=()=>{
    return(
        <Link to="/addpokemon">
            <div className="add-container">
                <div className="white-background">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png" alt="" className="add-image"/>
                </div>
                <div className="text-add">Add</div>
                
            </div>
        </Link>
        
    )
}

export default Añadir;