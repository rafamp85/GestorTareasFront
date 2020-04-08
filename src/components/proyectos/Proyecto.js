import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import ChartContext from '../../context/charts/chartContext';

const Proyecto = ({proyecto}) => {

  // Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  // Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  // Extraer charts de state inicial
  const chartContext = useContext(ChartContext);
  const { seleccionarChart } = chartContext;

  // Función para agregar el Proyecto Actual
  const seleccionarProyecto = id => {
    proyectoActual( id ); // Fijar un proyecto actual
    obtenerTareas( id ); // Filtrar las tareas cuando se de click
    seleccionarChart( id ); // Filtra una gráfica por id de proyecto
  };

  return (
      <li>
        <button
          type="button"
          className="btn btn-blank"
          onClick={ () => seleccionarProyecto(proyecto._id) }
        >{proyecto.nombre}</button>
      </li>
  );

};
export default Proyecto;
