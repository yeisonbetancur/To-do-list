import React from "react";
import '../hojas-de-estilo/FilterTareas.css'

function Button({text, onClick}) {
    return (
        <button className="boton-filter" onClick={onClick}>{text}</button>
    );
}

export default Button;