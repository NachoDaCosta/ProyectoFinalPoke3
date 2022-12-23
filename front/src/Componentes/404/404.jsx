import React from "react";
import { Link } from "react-router-dom";

const Error404=()=>{
    return(
        <div className="error-404">
        <Link to={`/`} > {/* link para que retroceda al menu principal */}
            <img src="./Imagenes/black-arrow-left.png" className="black-arrow" alt="" />
        </Link>
        <img src="/Imagenes/404.jpg" alt="" className="img-404"/>
        </div>
    )
}

export default Error404;