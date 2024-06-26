import React, { useState } from 'react';  // Importa React y el hook useState desde la librería 'react'
import '../hojas-de-estilo/TareaFormulario.css';  // Importa un archivo de hojas de estilo CSS

import { v4 as uuidv4 } from 'uuid';  // Importa la función v4 de uuid como uuidv4 para generar IDs únicos

function TareaFormulario(props) {  // Declara un componente funcional llamado TareaFormulario que recibe props

  const [input, setInput] = useState('');  // Declara el estado input inicializado con una cadena vacía

  const manejarCambio = e => {  // Función que maneja el cambio en el input
    setInput(e.target.value);  // Actualiza el estado input con el valor del input
  }

  const manejarEnvio = e => {  // Función que maneja el envío del formulario
    e.preventDefault();  // Previene el comportamiento por defecto del formulario
    
    const tareaNueva = {  // Crea un objeto tareaNueva
      id: uuidv4(),  // Asigna un ID único generado por uuidv4
      texto: input,  // Asigna el texto del input al campo texto
      completada: false  // Asigna false al campo completada
    }

    props.onSubmit(tareaNueva);  // Llama a la función onSubmit pasando tareaNueva como argumento
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}> 
      <input 
        className='tarea-input' 
        type='text'
        placeholder='Escribe una Tarea' 
        name='texto'
        onChange={manejarCambio} 
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;  // Exporta el componente TareaFormulario como componente por defecto
