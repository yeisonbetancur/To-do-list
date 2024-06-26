import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario'; // Importamos el componente TareaFormulario
import Tarea from './Tarea'; // Importamos el componente Tarea
import '../hojas-de-estilo/ListaDeTareas.css'; // Importamos la hoja de estilos CSS
import { FaFilter } from 'react-icons/fa'; // Importamos el ícono de filtro desde react-icons
import '../hojas-de-estilo/FilterTareas.css'
import Button from './Boton'

function ListaDeTareas() {
  // Estado para almacenar la lista de tareas
  const [tareas, setTareas] = useState([]);
  // Inicializamos el estado de isChecked en false utilizando el hook useState
  const [isChecked, setIsChecked] = useState(false);

  // Función para cambiar el estado de isChecked
  const handleCheckboxChange = () => {
    // La función setIsChecked actualiza el estado de isChecked
    // prevState representa el valor anterior de isChecked antes de la actualización
    setIsChecked(prevState => !prevState); // Alternamos entre true y false
  };

  const [filter, setFilter] = useState('all'); // Estado para el filtro

  const filteredTasks = tareas.filter(tareas => {
    if (filter === 'completed') {
      return tareas.completada;
    } else if (filter === 'pending') {
      return !tareas.completada;
    } else {
      return true; 
    }
  });

  // Función para determinar el estilo de visualización (flex o none)
  const visible = isChecked => {
    return isChecked ? 'flex' : 'none'; // Si isChecked es true, muestra flex; de lo contrario, muestra none
  };

  // Función para agregar una nueva tarea
  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  // Función para eliminar una tarea por su ID
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // Función para marcar/desmarcar una tarea como completada
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <div className='barra-busqueda'>
        {/* Componente TareaFormulario */}
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="container-filter-tareas">
        {/* Checkbox */}
        <input
          type="checkbox"
          id="miCheckbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="miCheckbox">
          {/* Ícono de filtro */}
          <div className="icon-tarea-filter">
            <FaFilter /> {/* Renderizamos el ícono */}
        </div>
      </label>

      {/* Opciones de filtro */}
      <div className="filter-tarea" style={{ display: visible(isChecked) }}>
      <Button 
          text="Completed"
          onClick={() => setFilter('completed')}
        />

        <Button
          text="Pending"
          onClick={() => setFilter('pending')}
        />
        <Button
          text="All"
          onClick={() => setFilter('all')}
        />
      </div>
    </div>
      </div>

      <div className='tareas-lista-contenedor'>
        {/* Mapeamos y renderizamos la lista de tareas */}
        {filteredTasks.map(tarea => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
