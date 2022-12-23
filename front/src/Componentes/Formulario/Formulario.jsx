import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Formulario=(props)=>{
        const navigate=useNavigate()
        
        if (!localStorage.getItem("token")){
        navigate("/")
        }
    
    const addpokemon = () => {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: document.getElementById('pk-number').value,
        name: document.getElementById('pk-name').value,
        PrimaryType: document.getElementById('pk-ptype').value,
        SecondaryType: document.getElementById('pk-stype').value,
        weight: document.getElementById('pk-weight').value,
        height: document.getElementById('pk-height').value,
        moves1: document.getElementById('pk-move1').value,
        moves2: document.getElementById('pk-move2').value,
        description: document.getElementById('pk-description').value,
        hp: document.getElementById('pk-hp').value,
        atk: document.getElementById('pk-atk').value,
        def: document.getElementById('pk-def').value,
        satk: document.getElementById('pk-satk').value,
        sdef: document.getElementById('pk-sdef').value,
        spd: document.getElementById('pk-spd').value,
        image: document.getElementById('pk-img').value
    })
    }
    fetch('http://localhost:8080/pokemones', requestOption)
    .then(response => response.json())
    .then(data => {
    if(data.error==null){
        props.setTime(Math.round())
        console.log("Se añadió con exito")
        navigate("/")
    }
    })
  }

    return(
     <div className="formulario">
        <div className="form-go-home">
            <Link to={`/`}  className="arrow-container-form"> {/* link para que retroceda al menu principal */}
                <img src="./Imagenes/arrow-left.svg" className="white arrow-size" alt="" />    
            </Link>
            <div className="form-text-home">Return Home</div>
        </div>
        <div className="form-inside">
            <div className="add-form-text">Add a Pokemon</div>
            <div className="form-inputs">
                <div>
                    <div className="form-cols">
                        <div>Number:</div>
                        <div className="align-input-stats">
                             <input type="text" id='pk-number' name="pk-number" form='pk-number' placeholder="Add a pokemon number" className="input-name"/>
                        </div>
                    </div >
                    <div className="form-cols">
                        <div>Name:</div>
                        <div className="align-input-stats">
                             <input type="text" id='pk-name' name="pk-name" form='pk-name' placeholder="Add a pokemon name" className="input-name"/>
                        </div>
                    </div>
                </div>

                <div>
                <div className="form-cols-type">
                        <div>Primary Type:</div>
                        <div className="align-input-stats">
                             {/* <input type="text" id='pk-ptype' name="pk-ptype" form='pk-ptype' placeholder="Pokemon Primary Type" className="input-type"/>*/}
                             <select name="select" id='pk-ptype' className="select-type">
                                <option value="fire">Fire</option>
                                <option value="water" >Water</option>
                                <option value="electric">Electric</option>
                                <option value="normal">Normal</option>
                                <option value="water" >Water</option>
                                <option value="ghost">Ghost</option>
                                <option value="grass">Grass</option>
                                <option value="bug">Bug</option>
                                <option value="psychic">Psychic</option>
                                <option value="steel">Steel</option>
                                <option value="rock" >Rock</option>
                                <option value="poison">Poison</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-cols-type">
                        <div>Secondary Type:</div>
                        <div className="align-input-stats">
                            <select name="select" id='pk-stype' className="select-type">
                                <option value="">None</option>
                                <option value="fire">Fire</option>
                                <option value="water" >Water</option>
                                <option value="electric">Electric</option>
                                <option value="normal">Normal</option>
                                <option value="water" >Water</option>
                                <option value="ghost">Ghost</option>
                                <option value="grass">Grass</option>
                                <option value="bug">Bug</option>
                                <option value="psychic">Psychic</option>
                                <option value="steel">Steel</option>
                                <option value="rock" >Rock</option>
                                <option value="poison">Poison</option>
                              
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="form-4rows">
                    <div className="form-cols">
                        <div>Weight:</div>
                        <div>
                             <input type="text" id='pk-weight' name="pk-weight" form='pk-weight' placeholder="Add a value" className="input-name"/>
                        </div>
                    </div >
                    <div className="form-cols">
                        <div>Height:</div>
                        <div>
                             <input type="text" id='pk-height' name="pk-height" form='pk-height' placeholder="Add a value" className="input-name"/>
                        </div>
                    </div >
                    <div className="form-cols">
                        <div>Move1:</div>
                        <div>
                             <input type="text" id='pk-move1' name="pk-move" form='pk-move' placeholder="Add a value" className="input-name"/>
                        </div>
                    </div >   
                    <div className="form-cols">
                        <div>Move2:</div>
                        <div>
                             <input type="text" id='pk-move2' name="pk-move" form='pk-move' placeholder="Add a value" className="input-name"/>
                        </div>
                    </div >
                </div>

                <div className="form-description">
                    <div>Description:</div>
                    <div>
                        <input type="text" id='pk-description' name="pk-description" 
                        form='pk-description' placeholder="Add a pokemon description" className="input-description"/>
                    </div>
                </div>
                <div className="form-stats">
                    <div>
                        <div className="two-rows-stats">
                            <div>Hp:</div>
                            <div className="align-input-stats">
                                <input type="text" id='pk-hp' name="pk-hp" 
                                form='pk-hp' placeholder="Set Pokemon Hp" className="input-stats"/>
                            </div>
                        </div>
                        <div className="two-rows-stats">
                            <div>Atk:</div>
                            <div className="align-input-stats">
                                <input type="text" id='pk-atk' name="pk-atk" 
                                form='pk-atk' placeholder="Set Pokemon Atk" className="input-stats"/>
                            </div>
                        </div>
                        <div className="two-rows-stats">
                            <div>Def:</div>
                            <div className="align-input-stats">
                                <input type="text" id='pk-def' name="pk-def" 
                                form='pk-def' placeholder="Set Pokemon Def" className="input-stats"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="two-rows-stats">
                            <div>Satk:</div>
                            <div className="align-input-stats">
                                <input type="text" id='pk-satk' name="pk-satk" 
                                form='pk-satk' placeholder="Set Pokemon Satk" className="input-stats"/>
                            </div>
                        </div>
                        <div className="two-rows-stats">
                            <div>Sdef:</div>
                            <div className="align-input-stats">
                                <input type="text" id='pk-sdef' name="pk-sdef" 
                                form='pk-sdef' placeholder="Set Pokemon Sdef" className="input-stats"/>
                            </div>
                        </div>
                        <div className="two-rows-stats">
                            <div>Spd:</div>
                            <div className="align-input-stats">
                                <input type="text" id='pk-spd' name="pk-spd" 
                                form='pk-spd' placeholder="Set Pokemon Spd" className="input-stats"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="form-cols">
                        <div>Image Url:</div>
                        <div className="align-input-stats">
                             <input type="text" id='pk-img' name="pk-img" form='pk-img' placeholder="Add a image using url" className="input-name"/>
                        </div>
                    </div >
            </div>
        </div>
        <div>
            <span className="add-pokemon-button" onClick={addpokemon}>Add Pokemon</span>
        </div>
     </div>   
    )

}

export default Formulario;