import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import ChartContext from '../../context/charts/chartContext';
import Chart from '../recharts/Chart';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Timer from '../timer/Timer';

const ListadoTarea = () => {

  // Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { tareasProyecto } = tareasContext;

  // Extraer charts de state inicial
  const chartContext = useContext(ChartContext);
  const { chart } = chartContext;


  // Si no hay proyecto seleccionado
  if ( !proyecto ) return <h2>Selecciona un proyecto</h2>;

  const [ proyectoActual ] = proyecto;

  const onClickEliminar = () => {
   eliminarProyecto(proyectoActual._id)
  }


  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0
          ? <li className="tarea">No hay tareas</li>

          : <TransitionGroup>
              <Timer/>
              {tareasProyecto.map( tarea => (
                <CSSTransition
                  key={tarea._id}
                  timeout={200}
                  classNames="tarea"
                >
                      <Tarea
                        tarea={tarea}
                      />
                </CSSTransition>
              ))}
            </TransitionGroup>
        }
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={ onClickEliminar }
      >Eliminar Proyecto &times;</button>

    { chart ? <Chart chart={chart[0]} proyectos={tareasProyecto} /> : null}

    </Fragment>
  );

};
export default ListadoTarea;
