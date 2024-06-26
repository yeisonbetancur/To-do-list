import './App.css';
import Coraje from './imagenes/coraje.jpg';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='coraje-logo-contenedor'>
        <img 
          src={Coraje} 
          className='coraje-logo' 
          alt='foto-coraje'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
