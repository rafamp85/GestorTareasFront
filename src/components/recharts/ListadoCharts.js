import React, { Fragment, useContext } from 'react';
import ChartContext from '../../context/charts/chartContext';
import Chart from './Chart';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ListadoCharts = () => {

  // Extraer charts de state inicial
  const chartContext = useContext(ChartContext);
  const { chart } = chartContext;

  // Si no hay proyecto seleccionado
  if ( !chart ) return <h2>Selecciona una gráfica</h2>;

  return (
    <Fragment>
      <h2>{chart.nombre}</h2>

      <ul className="listado-tareas">
              <TransitionGroup>
                <CSSTransition
                  key={chart._id}
                  timeout={200}
                  classNames="tarea"
                >
                  <Chart
                    chart={chart}
                  />
                </CSSTransition>
            </TransitionGroup>
      </ul>

    </Fragment>
  );

};
export default ListadoCharts;
