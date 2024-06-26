import React from 'react';
import '../hojas-de-estilo/Tarea.css'; // Importamos la hoja de estilos CSS
import { AiOutlineCloseCircle } from "react-icons/ai"; // Importamos el ícono de cierre desde react-icons

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      {/* Texto de la tarea */}
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      {/* Icono de cierre */}
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' /> {/* Renderizamos el ícono */}
      </div>
    </div>
  );    
}

export default Tarea;
